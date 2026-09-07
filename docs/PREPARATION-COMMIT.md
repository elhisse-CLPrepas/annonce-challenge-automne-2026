# Préparation du commit — 7 septembre 2026

**Décision ultérieure du pilote :** commit local autorisé dans le dépôt séparé `elhisse-CLPrepas/annonce-challenge-automne-2026`. `origin` est configuré et la branche locale initiale est `main`, le dépôt distant ne présentant aucune branche lors de sa lecture. La suite de ce document conserve l’état de la préparation antérieure au choix du dépôt ; le [guide de déploiement actualisé](DEPLOIEMENT-GITHUB-PAGES.md) et la dernière décision de `SOURCES-ET-DECISIONS.md` prévalent. La photographie `.preparation-commit/lot-20260907/` est désormais historique : le commit inclut aussi l’adaptation des documents et de l’URL prévue au dépôt retenu.

## Périmètre prêt à examiner

Préparation locale des sources et d’une copie statique de publication du Challenge 100 Jours Automne 2026. Aucun commit, aucune initialisation de dépôt, aucun push, aucune modification de GitHub Pages.

Le dossier courant n’est pas un dépôt Git. Le choix entre l’intégration dans `elhisse-CLPrepas/offre-formation-ia` et un dépôt séparé a été demandé au pilote. La préparation ci-dessous est utilisable dans les deux cas et ne désigne pas automatiquement un dépôt.

## Contenu du commit des sources

Liste explicite dans `docs/COMMIT-FICHIERS.txt`. Elle comprend :

- HTML/CSS/JavaScript, configuration, scripts et tests ;
- manifeste npm, lockfile Vite 8.0.16, version Node, configuration npm ;
- logo utilisé, deux affiches affichées et ancienne affiche conservée volontairement ;
- messages de campagne, documentation, instructions du projet et preuves statiques sélectionnées ;
- `.gitignore` et `.gitattributes` (fins de ligne LF pour le texte, images traitées comme binaires).

Hors commit : `node_modules/`, `dist/`, fichiers `.env`, journaux, caches, préparations, original local du logo à la racine et journal npm brut contenant des chemins locaux. Ces fichiers sont conservés sur disque. Le rapport statique courant est inclus volontairement comme preuve de ce lot ; son horodatage est une donnée de contrôle, pas un résultat reproductible à l’octet près.

Une copie locale des sources et un manifeste SHA-256 sont préparés sous `.preparation-commit/lot-20260907/`, exclu du versionnement. Ce répertoire est une photographie du lot, pas un index Git. Toute modification ultérieure nécessite de refaire sa comparaison avant indexation. Les empreintes décrivent les octets locaux, avant la normalisation des fins de ligne par Git.

## Copie prête pour une future publication

`.preparation-commit/lot-20260907/publication/annonce-automne-2026/` contient uniquement le HTML compilé et ses ressources référencées. L’ancienne affiche inutilisée, les sources, rapports et journaux ne font pas partie de cette copie publique. Aucun fichier de l’offre racine n’est remplacé.

`announcementUrl` reste nul : l’annonce n’est pas déclarée publiée et les partages renvoient vers l’offre existante. L’adresse publique proposée reste celle du sous-dossier de l’offre ; elle devra être adaptée si un dépôt séparé est retenu.

## Contrôles et limites

- `npm.cmd run ci` relancé : **21 tests réussis**, compilation Vite 8.0.16 et validation de 9 identifiants / 7 références locales réussies, campagne régénérée.
- Recherche ciblée de marqueurs de conflits, formats usuels de clés et jetons : aucun motif signalé dans les fichiers candidats. Ce contrôle n’est pas une garantie d’absence de tout secret.
- Revue indépendante en lecture seule `review_precommit` : doublon du logo, journal brut, documentation du build et fichiers générés examinés. Exclusions et README ajustés en conséquence.
- Le HTML public et ses images ont été contrôlés par HTTP lors du lot précédent ; la recette visuelle mobile, clavier et zoom reste à valider humainement.
- Aucune indexation Git ni comparaison avec un checkout cible n’a été effectuée, puisque le dépôt n’a pas encore été choisi.

## Message de commit proposé

```text
feat: ajouter l’annonce du Challenge 100 Jours automne 2026

Présenter la méthode et les projets, avec la nouvelle affiche et le logo LN-IA.
Orienter vers l’offre, le portfolio et la communauté avec des liens de secours.
Inclure les tests, le verrouillage Vite et la documentation de livraison.
```

Le message sera adapté au diff final du dépôt cible. Les fichiers à indexer doivent venir de la liste explicite, après relecture ; éviter `git add .`.

## Passage à GitHub Pages, après le commit

Configuration de `elhisse-CLPrepas/offre-formation-ia` lue le 7 septembre 2026 via `gh api` : `build_type: legacy`, branche `main`, dossier `/`, statut `built`, URL `https://elhisse-clprepas.github.io/offre-formation-ia/`. Le premier accès réseau restreint a échoué ; la lecture autorisée a ensuite réussi. Aucun réglage modifié. Le README distant contient encore un ancien statut de non-publication : la configuration lue et les contrôles HTTP priment pour préparer la suite. Il faudra relire ces réglages au moment de publier.

1. Choisir le dépôt, son checkout et une branche de travail ; relire les instructions et l’état Git de ce dépôt.
2. Intégrer le lot dans un emplacement dédié, revoir le diff et les exclusions, relancer les contrôles, puis obtenir l’instruction de commit.
3. Vérifier la source actuelle de publication GitHub Pages et convenir de l’action de push. Un push sur une branche publiée peut déclencher immédiatement la publication : cette étape doit donc être préparée avec le déploiement.
4. Pour l’offre existante, copier le dossier statique `annonce-automne-2026/` au bon emplacement de la source publiée, après accord. Pour un dépôt séparé, choisir d’abord la branche et le dossier statique de publication. Ne pas publier directement l’HTML source de Vite.
5. Contrôler l’URL publique et ses ressources, puis renseigner `announcementUrl`, reconstruire et publier la mise à jour autorisée.

Aucun workflow de publication automatique ajouté. GitHub Pages peut utiliser une branche (racine ou `/docs`) ou un workflow ; le mécanisme existant doit être vérifié avant d’agir. Référence : [documentation officielle GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Handoff

**Produit :** exclusions, attributs Git, liste de fichiers, copie de sources, copie statique et manifeste. **Testé automatiquement :** CI et vérification des fichiers. **Validé humainement :** non confirmé. **Committé / publié :** non.

Décision attendue : dépôt cible et validation visuelle. Les fichiers de préparation n’autorisent aucune action distante. Les rapports historiques restent datés ; les résultats du dernier lot prévalent pour les corrections déjà réalisées.
