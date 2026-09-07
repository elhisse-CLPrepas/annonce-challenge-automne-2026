# Challenge 100 Jours — pack d’annonce Automne 2026

Une page Vite publiée, deux affiches affichées et une ancienne conservée, trois messages de campagne et un prompt maître pour poursuivre avec Codex. Départ : vendredi 25 septembre 2026. Version : V1 publiée le 7 septembre 2026, après accord visuel et autorisation du pilote.

## Commencer

1. Cloner `https://github.com/elhisse-CLPrepas/annonce-challenge-automne-2026.git`, ou utiliser le dossier du pack local.
2. Ouvrir ce dossier dans VS Code, puis son terminal.
3. Installer Node.js 24 LTS si nécessaire ; contrôler `node --version` et `npm --version`.
4. Lancer les commandes suivantes, sous Windows, macOS ou Linux :

```sh
npm ci
npm run dev
```

Ouvrir l’adresse locale affichée par Vite, généralement `http://127.0.0.1:5173`. Garder le terminal ouvert. `Ctrl+C` arrête le serveur.

Sous Windows PowerShell, si `npm.ps1` est bloqué, utiliser `npm.cmd ci`, `npm.cmd run dev` et `npm.cmd run ci`. Cela ne nécessite pas de modifier la politique d’exécution de PowerShell.

Pour contrôler et voir la version compilée :

```sh
npm run ci
npm run preview
```

Ne pas ouvrir `index.html` par double-clic : Vite utilise des modules JavaScript qui nécessitent un serveur HTTP. Le dossier `dist/` est généré par `npm run ci` et exclu du commit des sources. Il peut être présent dans le pack local fourni, mais il faut le reconstruire après un clonage. Ne jamais modifier ses fichiers à la main.

## Poursuivre dans Codex

Lire `PROMPT-MAITRE-CODEX-ASTRA.md`, puis copier sa section « Prompt à donner à Codex » dans votre conversation Codex ouverte sur ce dossier. Le prompt demande d’abord une lecture du projet existant, pas sa reconstruction aveugle.

Si Astra est disponible dans votre compte, le choisir dans le sélecteur de modèles Codex. Avec la CLI déjà installée :

```sh
codex -m gpt-6-astra
```

Un prompt ne change pas lui-même le modèle actif. L’accès dépend du compte et du déploiement OpenAI. Aucun abonnement ni clé API n’est requis pour afficher ce mini-site ; l’outil d’assistance Codex est distinct du site. Voir la [documentation officielle](https://learn.chatgpt.com/docs/models).

## Ce que contient le pack

| Élément | Utilité |
|---|---|
| `index.html`, `src/` | Page française, présentation responsive, CTA et partage |
| `public/images/` | Logo LN-IA, deux affiches affichées et ancienne affiche Astra conservée ; images non retouchées |
| `config/campaign.json` | Destinations, campagne et statut de publication |
| `dist/` | Version statique générée, portable en sous-dossier, non versionnée avec les sources |
| `campagne/` | Messages WhatsApp, Facebook, LinkedIn et liens UTM |
| `AGENTS.md` | Règles de travail et limites d’autorité |
| `PROMPT-MAITRE-CODEX-ASTRA.md` | Brief de production et de reprise pour Codex |
| `docs/` | Sources, matrice CTA, orchestration, déploiement, contrôle |
| `tests/`, `scripts/`, `preuves/` | Tests, génération de campagne et rapport statique |

Vite 8.0.16 est verrouillé dans `package-lock.json`. L’application utilise HTML, CSS et JavaScript natifs : aucune base de données, aucun framework d’interface additionnel, aucun service tiers au chargement.

## Décision d’architecture

La page d’offre reste la destination commerciale :
https://elhisse-clprepas.github.io/offre-formation-ia/

L’annonce est une porte d’entrée depuis les réseaux sociaux, maintenue dans le dépôt séparé `elhisse-CLPrepas/annonce-challenge-automne-2026`. [Ouvrir l’annonce publiée](https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/).

La branche `main` contient les sources Vite ; `gh-pages` contient les fichiers compilés servis par GitHub Pages depuis sa racine. Le site de l’offre reste inchangé. La compilation locale ne publie rien ; lire `docs/DEPLOIEMENT-GITHUB-PAGES.md` pour les prochaines mises à jour.

## Réglages importants

- `announcementUrl` contient l’adresse HTTPS de l’annonce, vérifiée après la première publication. Les partages et messages générés utilisent cette destination.
- Toute modification de cette adresse exige une vérification publique et une nouvelle exécution de `npm run ci`.
- `proposedAnnouncementUrl` est une proposition documentaire, jamais un lien activé automatiquement.
- Les dates visibles dans le HTML et les textes éditoriaux sont propres à cette session. Ce pack n’est pas un générateur universel de sessions : changer de date exige de relire la page, les affiches, les scripts et les tests. `startDate` est la date de contrôle ; `dateLabel` alimente le partage WhatsApp.
- Les canaux acceptés sont volontairement limités à WhatsApp, Facebook, LinkedIn et visite directe. Ajouter un canal exige d’adapter et tester `src/links.js`.
- Les UTM ne collectent pas de statistiques. Aucun outil analytique n’est installé.
- Ne pas ajouter de paramètres au lien d’invitation My-Community-IA.

Les conditions, tarifs et horaires précis ne sont pas inventés. Rejoindre la communauté ne vaut pas inscription confirmée. Les preuves renvoient à des fiches et synthèses publiques, pas à des démos garanties.

## Avant diffusion

Le pilote a donné son accord visuel et autorisé la publication le 7 septembre 2026. Les contrôles automatiques et HTTP sont consignés dans le rapport de publication. Cet accord ne détaille pas les appareils testés : clavier, zoom, lecteur d’écran et composeurs de partage ne sont pas déclarés vérifiés. Voir `docs/CONTROLE-LIVRAISON.md` et `docs/DEPLOIEMENT-GITHUB-PAGES.md`.

Les affiches jointes peuvent accompagner vos publications manuelles. Aucune vignette automatique `og:image` n’a été créée ni configurée ; son éventuelle création et sa validation constituent une demande distincte. Le rendu des aperçus sociaux n’est pas garanti par ce pack.

Les messages sont des brouillons : aucune publication ni invitation n’est envoyée automatiquement.

## Affiche de l’offre — 7 septembre 2026

L’image fournie sous le nom `ChatGPT Image 7 sept. 2026, 01_28_35.png` est renommée et déplacée dans `public/images/affiche-offre-challenge-100-jours-automne-2026.png`. Elle remplace l’ancienne affiche Astra dans le bloc d’accueil, à droite sur ordinateur et sous le texte sur mobile. L’image et sa légende « Découvrir l’offre de formation » renvoient vers l’offre existante. L’ancienne image reste conservée dans `public/images/affiche-astra-codex.png`.

## Logo et préparation du commit

Le logo fourni `logo-LN-IA.png` est conservé localement à la racine, hors versionnement, et copié sans retouche dans `public/images/logo-LN-IA.png`, qui est la ressource versionnée. Il remplace le monogramme textuel dans l’en-tête et le pied de page. Les deux logos renvoient à l’accueil. Voir `docs/PREPARATION-COMMIT.md` pour le lot et `docs/AVANT-COMMIT.md` pour la recette humaine. Le dépôt local est associé à l’URL GitHub choisie ; le commit des sources, leur push et la publication Pages sont des étapes distinctes.
