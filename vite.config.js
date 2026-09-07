import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const campaign = JSON.parse(readFileSync(new URL('./config/campaign.json', import.meta.url), 'utf8'));
export default defineConfig({
  base: './',
  plugins: [{
    name: 'ln-ia-publication-metadata',
    transformIndexHtml() {
      if (!campaign.announcementUrl) return [];
      const url = new URL(campaign.announcementUrl);
      if (url.protocol !== 'https:' || url.search || url.hash || url.username || url.password) {
        throw new Error('announcementUrl doit être une URL HTTPS publique sans paramètre, fragment ou identifiant.');
      }
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: url.href }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: url.href }, injectTo: 'head' }
      ];
    }
  }],
  build: { target: 'es2022' }
});
