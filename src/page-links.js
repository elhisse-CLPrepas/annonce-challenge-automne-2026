import { attribution, trackedUrl, shareLinks } from './links.js';

// Le HTML porte les liens de secours ; ce raccordement ajoute l’attribution.
export function applyCampaignLinks(root, campaign, search = '') {
  const origin = attribution(search);
  root.querySelectorAll('[data-offer]').forEach((link) => {
    link.href = trackedUrl(campaign.offerUrl, campaign, {
      ...origin,
      content: 'annonce_' + link.dataset.offer,
      // Une ancre explicitement vide désigne le début de l’offre.
      anchor: link.dataset.anchor ?? (link.dataset.offer === 'footer' ? '' : 'candidature')
    });
  });
  root.querySelectorAll('[data-portfolio]').forEach((link) => {
    link.href = trackedUrl(campaign.portfolioUrl, campaign, {
      ...origin, content: 'preuve_' + link.dataset.portfolio, anchor: link.dataset.anchor || ''
    });
  });
  root.querySelectorAll('[data-community]').forEach((link) => {
    link.href = campaign.communityUrl;
  });
  Object.entries(shareLinks(campaign)).forEach(([network, url]) => {
    const link = root.getElementById('share-' + network);
    if (link) link.href = url;
  });
}
