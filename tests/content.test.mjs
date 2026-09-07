import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('le numéro du jour reste accessible dans le hero', () => {
  assert.match(html, /<time class="date" datetime="2026-09-25"><span>25<\/span>/);
});
test('les liens essentiels fonctionnent comme liens HTML sans JavaScript', () => {
  assert.match(html, /data-offer="hero" href="https:\/\/elhisse-clprepas.github.io\/offre-formation-ia\/"/);
  assert.match(html, /data-community="hero" href="https:\/\/chat.whatsapp.com\/L900Zbek15j3tBtkJnpKaI"/);
});
test('la page distingue communauté, inscription et preuves documentaires', () => {
  assert.match(html, /Rejoindre le groupe ne confirme pas votre inscription/);
  assert.match(html, /synthèses et des métadonnées de preuves/);
});
