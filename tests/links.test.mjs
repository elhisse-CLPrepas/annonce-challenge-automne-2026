import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { attribution, trackedUrl, shareLinks } from '../src/links.js';

const campaign = JSON.parse(readFileSync(new URL('../config/campaign.json', import.meta.url), 'utf8'));

test('la date de départ est le vendredi 25 septembre 2026', () => {
  assert.equal(campaign.startDate, '2026-09-25');
  assert.equal(new Date(campaign.startDate + 'T12:00:00Z').getUTCDay(), 5);
});
test('une visite directe utilise une attribution neutre', () => {
  assert.deepEqual(attribution(), { source: 'annonce', medium: 'organic' });
});
test('les trois canaux autorisés sont conservés', () => {
  for (const source of ['whatsapp', 'facebook', 'linkedin']) {
    assert.deepEqual(attribution(`?utm_source=${source}&utm_medium=social`), { source, medium: 'social' });
  }
});
test('une source inconnue, une URL ou une injection ne sont pas propagées', () => {
  for (const source of ['https://exemple.test', '<script>alert(1)</script>', 'client-prive@example.test']) {
    assert.equal(attribution('?utm_source=' + encodeURIComponent(source)).source, 'annonce');
  }
  assert.equal(attribution('?utm_medium=secret').medium, 'organic');
});
test('les majuscules sont normalisées et les paramètres supplémentaires ignorés', () => {
  assert.deepEqual(attribution('?utm_source=LINKEDIN&email=prive@example.test'), { source: 'linkedin', medium: 'organic' });
});
test('le CTA garde la destination officielle, les UTM et une ancre correcte', () => {
  const result = new URL(trackedUrl(campaign.offerUrl, campaign, { source: 'facebook', content: 'annonce_hero', anchor: 'candidature' }));
  assert.equal(result.origin + result.pathname, campaign.offerUrl);
  assert.equal(result.searchParams.get('utm_source'), 'facebook');
  assert.equal(result.searchParams.get('utm_campaign'), campaign.id);
  assert.equal(result.searchParams.get('utm_content'), 'annonce_hero');
  assert.equal(result.hash, '#candidature');
});
test('les protocoles non HTTPS et les URL contenant des identifiants sont refusés', () => {
  for (const base of ['javascript:alert(1)', 'http://exemple.test', 'https://user:password@exemple.test']) {
    assert.throws(() => trackedUrl(base, campaign));
  }
});
test('les paramètres UTM existants sont remplacés sans duplication', () => {
  const result = new URL(trackedUrl(campaign.offerUrl + '?utm_source=ancien', campaign, { source: 'whatsapp' }));
  assert.deepEqual(result.searchParams.getAll('utm_source'), ['whatsapp']);
});
test('avant publication, les partages pointent vers l’offre, pas une annonce fictive', () => {
  const links = shareLinks({ ...campaign, announcementUrl: null });
  const facebook = new URL(new URL(links.facebook).searchParams.get('u'));
  const linkedin = new URL(new URL(links.linkedin).searchParams.get('url'));
  assert.equal(facebook.origin + facebook.pathname, campaign.offerUrl);
  assert.equal(linkedin.origin + linkedin.pathname, campaign.offerUrl);
  assert.equal(facebook.searchParams.get('utm_source'), 'facebook');
  assert.equal(linkedin.searchParams.get('utm_source'), 'linkedin');
  assert.match(new URL(links.whatsapp).searchParams.get('text'), /25 septembre 2026/);
  assert.match(new URL(links.whatsapp).searchParams.get('text'), /utm_source=whatsapp/);
});
test('après configuration, les partages utilisent l’URL d’annonce validée', () => {
  const links = shareLinks({ ...campaign, announcementUrl: campaign.proposedAnnouncementUrl });
  const target = new URL(new URL(links.linkedin).searchParams.get('url'));
  assert.equal(target.origin + target.pathname, campaign.proposedAnnouncementUrl);
});
test('le lien de communauté reste une invitation de groupe sans suivi ajouté', () => {
  assert.equal(campaign.communityUrl, 'https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI');
  assert.equal(new URL(campaign.communityUrl).search, '');
});
