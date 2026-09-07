# Finalisation locale — Challenge 100 Jours, Automne 2026

## Mission et résultat

Finaliser la page d’annonce pour donner envie de pratiquer sur un projet concret, présenter la méthode et orienter vers l’offre et My-Community-IA. Départ conservé : vendredi 25 septembre 2026. Nouvelle affiche de l’offre conservée sans retouche, empreinte SHA-256 vérifiée.

Le premier écran part désormais du besoin et des productions possibles. Les liens « Découvrir l’offre » ouvrent le début de la page commerciale ; les appels à candidature et au programme gardent leurs ancres respectives. L’inscription distincte de l’adhésion à la communauté est expliquée dès l’accueil. Le bloc outils est recentré sur la méthode pédagogique. Aucun tarif, témoignage, garantie de résultat ou formulaire ajouté.

La date utilise un élément `time`. Les styles du bloc date et de la légende s’adaptent aux petits écrans ; les liens portant les images ont une boîte de focus explicite. Ces ajustements sont produits, mais leur rendu réel reste à valider.

## Changements

| Fichiers | Travail réalisé |
|---|---|
| `index.html` | Texte d’accueil, découverte de l’offre, distinction communauté/inscription, date sémantique et présentation des outils. |
| `src/style.css` | Note d’accueil, liens d’images en bloc et ajustements à 420 px et moins. |
| `src/main.js`, nouveau `src/page-links.js` | Raccordement DOM isolé ; ancre vide explicite respectée pour les liens vers le début de l’offre. Fonctions pures maintenues dans `src/links.js`. |
| `tests/content.test.mjs`, nouveau `tests/page-links.test.mjs` | Adaptation du contrôle de date et 7 contrôles supplémentaires des destinations, UTM, invitations et partages. |
| `package.json`, `package-lock.json` | Vite 8.0.16 verrouillé ; nouveau module inclus dans le contrôle de syntaxe. |
| `README.md`, `docs/MATRICE-LIENS-CTA.md`, `docs/SOURCES-ET-DECISIONS.md`, `docs/CONTROLE-LIVRAISON.md` | Version, commandes PowerShell, matrice de destinations et résultats documentés. |
| `dist/`, `preuves/controle-statique.json`, `campagne/` | Compilation, preuve statique et campagne régénérées. |
| Ce compte rendu | Handoff de finalisation. |

## Contrôles exécutés et incidents résolus

- Mise à jour ciblée vers Vite 8.0.16 via npm : correctif de la branche 8.0, sans ajout de dépendance fonctionnelle.
- Première tentative `npm.cmd ci` : échec `EUSAGE`, incohérence de dépendances optionnelles `@emnapi` dans le lockfile généré. Résolution avec `npm.cmd install`, puis **nouveau `npm.cmd ci` réussi**. Aucun abaissement de Node ni installation forcée.
- Installation finale : 17 paquets installés, 18 audités, **0 vulnérabilité signalée par npm** à cet instant. Cela ne constitue pas une certification de sécurité.
- **`npm.cmd run ci` réussi** : syntaxe, **21 tests / 0 échec**, compilation Vite 8.0.16, validation statique (9 identifiants, 5 références locales), génération des messages.
- `npm.cmd run preview -- --port 4173 --strictPort` : aperçu lancé sur `http://127.0.0.1:4173/`.
- Requêtes HTTP locales : page, CSS, JavaScript et deux affiches en **200**.
- Nouvelle affiche : SHA-256 `14893d99c6f48b905b7d2514a6f09c778cfa47fbcf1deae8a98efc6f741a137a`, identique au fichier fourni lors de l’intégration.
- Browser : liste de navigateurs connectés vide ; aucune recette visuelle revendiquée.

Sous-tâche réellement déléguée : `tests_liens_page`, propriétaire du seul nouveau fichier de tests, puis relecture du HTML/CSS en lecture seule. L’agent principal a intégré les changements et exécuté la CI complète. Les tests utilisent un double DOM construit à partir des liens du HTML ; ils ne simulent pas un moteur de rendu et ne prouvent pas l’accessibilité en situation.

## Limites et décision attendue

**Produit et testé automatiquement ; à valider visuellement et éditorialement par le pilote ; non publié.** Aucun dépôt Git détecté, créé ou publié. Aucune action distante sur l’offre ou le portfolio, aucun message envoyé. `announcementUrl` reste nul et les partages utilisent l’offre existante.

À contrôler : rendu à 320/360 px, tablette et ordinateur, clavier, focus, zoom 200 %, lecteur d’écran, ouverture des composeurs et invitation réelle de groupe. Les images originales restent volumineuses ; la vitesse sur réseau mobile n’a pas été mesurée. Les métadonnées d’une future URL d’annonce, son hébergement et les aperçus sociaux devront être vérifiés lors du lot de publication.

Décision attendue : examiner l’aperçu local et valider le contenu et la présentation. Toute publication reste soumise à une instruction distincte. Pour relancer l’aperçu ultérieurement : `npm.cmd run preview -- --port 4173`.
