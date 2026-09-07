import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { applyCampaignLinks } from '../src/page-links.js';

const campaign = JSON.parse(readFileSync(new URL('../config/campaign.json', import.meta.url), 'utf8'));
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// Double DOM limité aux ancres réelles de cette page, pas une recette navigateur.
// Il permet de détecter une divergence entre les liens HTML et leur enrichissement JS.
function pageLinks() {
  const links = [...html.matchAll(/<a\b([^>]*)>/gi)].map(([, attributes]) => {
    const attrs = Object.fromEntries([...attributes.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
      .map(([, name, double, single]) => [name, (double ?? single).replaceAll('&amp;', '&')]));
    const dataset = Object.fromEntries(Object.entries(attrs)
      .filter(([name]) => name.startsWith('data-'))
      .map(([name, value]) => [name.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()), value]));
    return { id: attrs.id, dataset, href: attrs.href, htmlHref: attrs.href };
  });
  return linkRoot(links);
}

function linkRoot(links) {
  return {
    links,
    querySelectorAll(selector) {
      const match = /^\[data-(offer|portfolio|community)\]$/.exec(selector);
      assert.ok(match, 'Sélecteur pris en charge par le double DOM : ' + selector);
      return links.filter((link) => Object.hasOwn(link.dataset, match[1]));
    },
    getElementById(id) { return links.find((link) => link.id === id) ?? null; }
  };
}

function destination(href) {
  const url = new URL(href);
  return url.origin + url.pathname + url.hash;
}

test('tous les boutons offre et portfolio gardent les destinations HTML prévues', () => {
  const root = pageLinks();
  const expectedOffers = {
    header: '#candidature', hero: '', affiche: '', 'legende-affiche': '',
    programme: '#programme', final: '#candidature', footer: ''
  };
  const expectedPortfolio = {
    overview: '', progression: '#progression', controle: '#controle', publication: '#publication', footer: ''
  };
  applyCampaignLinks(root, campaign);
  for (const [kind, expected, base, prefix] of [
    ['offer', expectedOffers, campaign.offerUrl, 'annonce_'],
    ['portfolio', expectedPortfolio, campaign.portfolioUrl, 'preuve_']
  ]) {
    const links = root.querySelectorAll(`[data-${kind}]`);
    assert.deepEqual(links.map((link) => link.dataset[kind]).sort(), Object.keys(expected).sort());
    for (const link of links) {
      const name = link.dataset[kind];
      assert.equal(destination(link.htmlHref), base + expected[name], `${kind}/${name} sans JavaScript`);
      assert.equal(destination(link.href), destination(link.htmlHref), `${kind}/${name} avec JavaScript`);
      const url = new URL(link.href);
      assert.deepEqual(Object.fromEntries(url.searchParams), {
        utm_source: 'annonce', utm_medium: 'organic', utm_campaign: campaign.id, utm_content: prefix + name
      });
    }
  }
});

test('les canaux autorisés se propagent à chaque CTA sans toucher aux autres liens', () => {
  for (const [source, medium] of [['whatsapp', 'social'], ['facebook', 'paid_social'], ['linkedin', 'referral']]) {
    const root = pageLinks();
    applyCampaignLinks(root, campaign, `?utm_source=${source.toUpperCase()}&utm_medium=${medium}`);
    for (const link of root.links) {
      if (Object.hasOwn(link.dataset, 'offer') || Object.hasOwn(link.dataset, 'portfolio')) {
        const url = new URL(link.href);
        assert.equal(url.searchParams.get('utm_source'), source);
        assert.equal(url.searchParams.get('utm_medium'), medium);
      } else if (!link.id?.startsWith('share-')) {
        assert.equal(link.href, link.htmlHref, `Lien non suivi : ${link.htmlHref}`);
      }
    }
  }
});

test('les paramètres inconnus ou injectés ne contaminent aucun CTA', () => {
  for (const source of ['inconnu', 'https://exemple.test/', '<script>alert(1)</script>']) {
    const root = pageLinks();
    applyCampaignLinks(root, campaign, '?' + new URLSearchParams({
      utm_source: source, utm_medium: 'inconnu', utm_campaign: 'autre',
      utm_content: 'autre', email: 'prive@example.test', redirect: 'https://exemple.test/'
    }));
    for (const link of [...root.querySelectorAll('[data-offer]'), ...root.querySelectorAll('[data-portfolio]')]) {
      const params = new URL(link.href).searchParams;
      assert.equal(params.get('utm_source'), 'annonce');
      assert.equal(params.get('utm_medium'), 'organic');
      assert.equal(params.get('utm_campaign'), campaign.id);
      assert.notEqual(params.get('utm_content'), 'autre');
      assert.deepEqual([...params.keys()].sort(), ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source']);
    }
  }
});

test('chaque invitation de communauté conserve exactement son URL de groupe', () => {
  const root = pageLinks();
  applyCampaignLinks(root, campaign, '?utm_source=facebook&utm_medium=paid_social&text=bonjour');
  const links = root.querySelectorAll('[data-community]');
  assert.ok(links.length >= 2, 'Invitations dans l’accueil et le bloc final');
  for (const link of links) {
    assert.equal(link.htmlHref, campaign.communityUrl);
    assert.equal(link.href, campaign.communityUrl);
    assert.equal(new URL(link.href).search, '');
  }
});

for (const [label, announcementUrl] of [['avant publication', null], ['après configuration', campaign.proposedAnnouncementUrl]]) {
  test(`les trois boutons de partage visent la bonne page ${label}`, () => {
    const root = pageLinks();
    applyCampaignLinks(root, { ...campaign, announcementUrl }, '?utm_source=facebook&utm_medium=paid_social');
    for (const [network, parameter, endpoint] of [
      ['whatsapp', 'text', 'https://wa.me/'],
      ['facebook', 'u', 'https://www.facebook.com/sharer/sharer.php'],
      ['linkedin', 'url', 'https://www.linkedin.com/sharing/share-offsite/']
    ]) {
      const link = root.getElementById('share-' + network);
      assert.ok(link, `Bouton ${network} présent dans le HTML`);
      const share = new URL(link.href);
      assert.equal(share.origin + share.pathname, endpoint);
      const value = share.searchParams.get(parameter);
      assert.ok(value);
      const target = new URL(network === 'whatsapp' ? value.trim().split(/\s+/).at(-1) : value);
      assert.equal(destination(target.href), announcementUrl || campaign.offerUrl);
      assert.equal(target.searchParams.get('utm_source'), network);
      assert.equal(target.searchParams.get('utm_campaign'), campaign.id);
      if (network === 'whatsapp') assert.match(value, /25 septembre 2026/);
    }
  });
}

test('une page sans liens facultatifs et un partage isolé sont acceptés', () => {
  assert.doesNotThrow(() => applyCampaignLinks(linkRoot([]), campaign));
  const root = pageLinks();
  const linkedin = root.getElementById('share-linkedin');
  assert.ok(linkedin);
  assert.doesNotThrow(() => applyCampaignLinks(linkRoot([linkedin]), campaign));
  const target = new URL(new URL(linkedin.href).searchParams.get('url'));
  assert.equal(destination(target.href), campaign.announcementUrl || campaign.offerUrl);
  assert.equal(target.searchParams.get('utm_source'), 'linkedin');
});
