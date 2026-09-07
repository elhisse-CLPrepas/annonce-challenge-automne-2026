# Challenge 100 Jours — pack d’annonce Automne 2026

Une page Vite déjà construite, deux affiches affichées et une ancienne conservée, trois messages de campagne et un prompt maître pour poursuivre avec Codex. Départ : vendredi 25 septembre 2026. Version : V1 à valider humainement.

## Commencer

1. Cloner `https://github.com/elhisse-CLPrepas/annonce-challenge-automne-2026.git` après le push initial, ou utiliser le dossier du pack local.
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

L’annonce est une porte d’entrée depuis les réseaux sociaux, maintenue dans le dépôt séparé `elhisse-CLPrepas/annonce-challenge-automne-2026`. Emplacement prévu, non publié :
`https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/`

Le dépôt contient les sources Vite. Le site de l’offre reste inchangé. La compilation ne publie rien ; lire `docs/DEPLOIEMENT-GITHUB-PAGES.md` pour la prochaine étape.

## Réglages importants

- `announcementUrl: null` est volontaire : les partages utilisent l’offre existante tant que l’annonce n’est pas réellement en ligne.
- Après validation de l’adresse et de la publication, renseigner une URL HTTPS complète dans ce champ et relancer `npm run ci`.
- `proposedAnnouncementUrl` est une proposition documentaire, jamais un lien activé automatiquement.
- Les dates visibles dans le HTML et les textes éditoriaux sont propres à cette session. Ce pack n’est pas un générateur universel de sessions : changer de date exige de relire la page, les affiches, les scripts et les tests. `startDate` est la date de contrôle ; `dateLabel` alimente le partage WhatsApp.
- Les canaux acceptés sont volontairement limités à WhatsApp, Facebook, LinkedIn et visite directe. Ajouter un canal exige d’adapter et tester `src/links.js`.
- Les UTM ne collectent pas de statistiques. Aucun outil analytique n’est installé.
- Ne pas ajouter de paramètres au lien d’invitation My-Community-IA.

Les conditions, tarifs et horaires précis ne sont pas inventés. Rejoindre la communauté ne vaut pas inscription confirmée. Les preuves renvoient à des fiches et synthèses publiques, pas à des démos garanties.

## Avant diffusion

La compilation et les contrôles statiques sont fournis. La recette visuelle sur mobile, clavier et zoom, les destinations externes et les composeurs de partage restent à vérifier par une personne. Voir `docs/CONTROLE-LIVRAISON.md`.

Les affiches jointes peuvent accompagner vos publications manuelles. Aucune vignette automatique `og:image` n’a été créée ni configurée ; son éventuelle création et sa validation constituent une demande distincte. Le rendu des aperçus sociaux n’est pas garanti par ce pack.

Les messages sont des brouillons : aucune publication ni invitation n’est envoyée automatiquement.

## Affiche de l’offre — 7 septembre 2026

L’image fournie sous le nom `ChatGPT Image 7 sept. 2026, 01_28_35.png` est renommée et déplacée dans `public/images/affiche-offre-challenge-100-jours-automne-2026.png`. Elle remplace l’ancienne affiche Astra dans le bloc d’accueil, à droite sur ordinateur et sous le texte sur mobile. L’image et sa légende « Découvrir l’offre de formation » renvoient vers l’offre existante. L’ancienne image reste conservée dans `public/images/affiche-astra-codex.png`.

## Logo et préparation du commit

Le logo fourni `logo-LN-IA.png` est conservé localement à la racine, hors versionnement, et copié sans retouche dans `public/images/logo-LN-IA.png`, qui est la ressource versionnée. Il remplace le monogramme textuel dans l’en-tête et le pied de page. Les deux logos renvoient à l’accueil. Voir `docs/PREPARATION-COMMIT.md` pour le lot et `docs/AVANT-COMMIT.md` pour la recette humaine. Le dépôt local est associé à l’URL GitHub choisie ; le commit des sources, leur push et la publication Pages sont des étapes distinctes.
