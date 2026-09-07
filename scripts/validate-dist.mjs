import assert from 'node:assert/strict';
import { readFileSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const html = readFileSync(resolve(dist, 'index.html'), 'utf8');
const config = JSON.parse(readFileSync(resolve(root, 'config/campaign.json'), 'utf8'));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Identifiants HTML dupliqués');
assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, 'Un seul h1 attendu');
assert.match(html, /<html lang="fr">/);
assert.match(html, /25 septembre 2026/i);
assert.match(html, /Rien ne remplace/);
assert.doesNotMatch(html, /1er juin 2026|25 septembre 2025|2000 DH|2 000 DH|<iframe|<form/i);
const checked = [];
for (const [, attribute, value] of html.matchAll(/\b(src|href)="([^"]+)"/g)) {
  if (value.startsWith('#')) {
    assert.ok(ids.includes(value.slice(1)), 'Ancre interne absente : ' + value);
  } else if (/^https:\/\//.test(value)) {
    new URL(value); // Syntaxe seulement : aucun contrôle réseau implicite.
  } else {
    assert.ok(!value.startsWith('/'), 'Chemin absolu non portable : ' + value);
    const path = resolve(dist, decodeURIComponent(value.split(/[?#]/)[0]));
    assert.ok(path.startsWith(dist + sep), 'Ressource hors dist : ' + value);
    assert.ok(existsSync(path) && statSync(path).isFile(), 'Ressource absente : ' + value);
    checked.push({ attribute, resource: value, bytes: statSync(path).size });
  }
}
for (const image of html.matchAll(/<img\b[^>]+>/g)) {
  assert.match(image[0], /alt="[^"]+"/);
  assert.match(image[0], /width="\d+"/);
  assert.match(image[0], /height="\d+"/);
}
assert.equal(/rel="canonical"/.test(html), Boolean(config.announcementUrl), 'URL canonique prématurée ou absente');
const report = {
  status: 'CONTROLES_STATIQUES_REUSSIS',
  executedAt: new Date().toISOString(),
  node: process.version,
  checks: ['HTML français', 'h1 unique', 'date de relance', 'identifiants uniques', 'ancres internes', 'ressources locales présentes', 'chemins relatifs', 'images avec alt et dimensions', 'URL canonique conditionnelle', 'absence des anciennes dates et tarifs vérifiés par motif'],
  localResources: checked,
  notTested: ['rendu navigateur', 'clavier et lecteur d’écran en situation', 'réponses HTTP externes', 'ouverture réelle des composeurs sociaux', 'aperçus sociaux', 'publication GitHub Pages'],
  humanValidation: 'A_EFFECTUER'
};
mkdirSync(resolve(root, 'preuves'), { recursive: true });
writeFileSync(resolve(root, 'preuves/controle-statique.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`Contrôles statiques réussis : ${ids.length} identifiants, ${checked.length} références locales. Rapport : preuves/controle-statique.json`);
