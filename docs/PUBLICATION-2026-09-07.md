# Rapport de publication — 7 septembre 2026

## Résultat et mission

L’annonce du Challenge 100 Jours, départ vendredi 25 septembre 2026, est publiée à [son adresse GitHub Pages](https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/). Le pilote a explicitement autorisé le push de `main` et la publication des fichiers compilés sur `gh-pages`. Son message a été retenu comme accord visuel ; les appareils contrôlés ne sont pas précisés.

## Références livrées

| Étape | Commit | Résultat vérifié |
|---|---|---|
| Sources initiales | `6507fba` | Poussées sur `main` |
| Première compilation publique | `5db31b9` | Pages `built`, six ressources HTTP 200 à 01:39 UTC |
| Activation de l’adresse et des partages | `1db700c09c9f12378652f38913a8d92f6fe7949c` | Sources poussées, 21 tests réussis |
| Compilation finale publiée | `f539e8aba5d9632008ef6c847686ace567daf76e` | Pages `built` à 01:41:30 UTC, HTTP et empreintes vérifiés à 01:41:48 UTC |

Le commit documentaire contenant ce rapport suit le commit source de compilation ; il ne change pas le site compilé. Pages sert la racine de `gh-pages`, mode `legacy`. Aucun workflow personnalisé ajouté. Cette branche contient exactement sept fichiers : `.nojekyll`, `index.html`, un CSS, un JavaScript et les trois images utilisées.

## Fichiers modifiés

- `config/campaign.json` : adresse publique activée, statut publié.
- `campagne/LIENS-ET-DIFFUSION.md`, `facebook.md`, `linkedin.md`, `whatsapp.md`, `liens-entrants.csv` : destinations régénérées vers l’annonce.
- `tests/page-links.test.mjs` : assertion du partage isolé adaptée à la destination configurée ; les tests existants couvrent les états avant et après publication.
- `README.md`, `docs/SOURCES-ET-DECISIONS.md`, `docs/DEPLOIEMENT-GITHUB-PAGES.md`, `docs/CONTROLE-LIVRAISON.md` et ce rapport : état publié, procédure et traçabilité.
- `preuves/controle-statique.json` : contrôle statique régénéré ; `preuves/publication-http-2026-09-07.json` : nouvelle preuve publique avec tailles et SHA-256.

Sur `gh-pages`, le HTML final contient canonical et `og:url` ; le JavaScript compilé active les partages vers l’annonce. Les images et les styles sont identiques à la première publication.

## Contrôles exécutés

1. État Git local propre, origine vérifiée et dépôt distant initialement vide ; pushes sans forçage.
2. `npm.cmd run ci` : un premier passage a détecté une assertion qui supposait `announcementUrl: null`. Après correction, syntaxe, 21 tests, compilation Vite 8.0.16, contrôle statique et génération des messages réussissent. Aucun changement de logique applicative nécessaire.
3. `git diff --check` réussi avant les commits ; arborescence publique inspectée pour confirmer l’absence de sources et de documents.
4. API GitHub : lecture de Pages et de `/pages/builds/latest`, source `gh-pages` / `/`, statut final `built`, commit `f539e8a`, aucune erreur de build. L’activation était déjà effective après le premier push ; la création API a répondu HTTP 409 « already enabled », puis la lecture a confirmé la configuration attendue.
5. GET HTTPS de la page et de ses cinq ressources uniques, avec paramètre anticache : tous HTTP 200 ; comparaison SHA-256 des octets reçus avec `dist/`, toutes identiques. Contrôle réalisé par le script local temporaire `.preparation-commit/verify-public.mjs` ; résultats conservés dans la preuve JSON.
6. HTML public identique au build contrôlé : deux occurrences du logo LN-IA, URL canonique et `og:url` exactes. Les tests des liens confirment les destinations offre/portfolio et l’invitation de communauté inchangée.

L’installation depuis le lockfile avec `npm.cmd ci` avait réussi pendant la préparation du commit ; elle n’a pas été répétée pour cette activation, sans modification des dépendances. Le script statique conserve ses limites propres ; son champ de validation humaine ne remplace pas l’accord du pilote consigné ici.

## Limites, risques et décision attendue

- Produit : sources et compilation terminées. Testé automatiquement : CI et contrôle HTTP public réussis. Accord humain : message du pilote avant publication, sans détail de recette par appareil. Publié : version `f539e8a` confirmée par Pages et HTTP.
- Aucun contrôle de rendu par l’agent dans un navigateur connecté pendant cette publication. Navigation clavier, lecteur d’écran, zoom et ouverture réelle des composeurs sociaux non vérifiés ici.
- Les destinations externes et leurs ancres ne font pas partie du contrôle HTTP de ce lot ; leurs URLs sont contrôlées par les tests locaux.
- Aucun aperçu social `og:image` dédié. Le site et ses images peuvent être servis depuis les caches des navigateurs ; un rafraîchissement forcé peut être nécessaire sur une page déjà ouverte.
- Les messages de campagne restent des brouillons ; aucun envoi ou publication sur les réseaux sociaux effectué.

Aucune décision supplémentaire nécessaire pour la mise en ligne demandée, qui est terminée. Les futurs changements et leur publication suivront les instructions du pilote.
