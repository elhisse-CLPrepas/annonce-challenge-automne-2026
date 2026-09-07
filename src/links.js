const allowedSources = new Set(['whatsapp', 'facebook', 'linkedin', 'annonce']);
const allowedMedia = new Set(['organic', 'social', 'paid_social', 'referral']);

export function attribution(search = '') {
  const query = new URLSearchParams(search);
  const source = query.get('utm_source')?.toLowerCase();
  const medium = query.get('utm_medium')?.toLowerCase();
  return {
    source: allowedSources.has(source) ? source : 'annonce',
    medium: allowedMedia.has(medium) ? medium : 'organic'
  };
}

export function trackedUrl(base, campaign, { source = campaign.defaultSource || 'annonce', medium = campaign.medium || 'organic', content = campaign.content || 'pratique_v1', anchor = '' } = {}) {
  const url = new URL(base);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('URL HTTPS attendue.');
  url.searchParams.set('utm_source', allowedSources.has(source) ? source : 'annonce');
  url.searchParams.set('utm_medium', allowedMedia.has(medium) ? medium : 'organic');
  url.searchParams.set('utm_campaign', campaign.id);
  url.searchParams.set('utm_content', content);
  url.hash = anchor;
  return url.href;
}

export function shareLinks(campaign) {
  // Tant que la page d’annonce n’est pas publiée, partager l’offre déjà en ligne.
  const target = campaign.announcementUrl || campaign.offerUrl;
  const whatsappTarget = trackedUrl(target, campaign, { source: 'whatsapp' });
  const facebookTarget = trackedUrl(target, campaign, { source: 'facebook' });
  const linkedinTarget = trackedUrl(target, campaign, { source: 'linkedin' });
  const text = 'RIEN NE REMPLACE LA PRATIQUE.\nChallenge 100 Jours — Automne 2026.\nDépart : ' + campaign.dateLabel.toLowerCase() + '. Apprenez à produire avec l’IA et construisez votre portfolio.\n' + whatsappTarget;
  return {
    whatsapp: 'https://wa.me/?' + new URLSearchParams({ text }),
    facebook: 'https://www.facebook.com/sharer/sharer.php?' + new URLSearchParams({ u: facebookTarget }),
    linkedin: 'https://www.linkedin.com/sharing/share-offsite/?' + new URLSearchParams({ url: linkedinTarget })
  };
}
