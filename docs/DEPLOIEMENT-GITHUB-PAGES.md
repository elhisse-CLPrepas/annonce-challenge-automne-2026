# GitHub Pages — annonce publiée dans un dépôt séparé

## Configuration effective

- Dépôt : https://github.com/elhisse-CLPrepas/annonce-challenge-automne-2026
- Site : https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/
- `main` : sources Vite, configuration, images, tests et documentation.
- `gh-pages`, dossier `/` : HTML compilé, CSS, JavaScript, trois images utilisées et `.nojekyll`.
- Mode Pages : `legacy`, publication depuis la branche. Aucun fichier de workflow personnalisé ajouté.

Le pilote a autorisé le push et la publication le 7 septembre 2026. Son message est retenu comme accord visuel, sans attester une liste d’appareils ou une recette d’accessibilité détaillée. Les sites de l’offre et du portfolio conservent leurs fichiers et leurs réglages.

## Première publication vérifiée

Les sources initiales `6507fba` sont poussées sur `main`. La première version compilée correspond à `5db31b9` sur `gh-pages`. Pages s’est activé lors du push ; la tentative de création par API a répondu « already enabled », puis la lecture a confirmé `gh-pages` à la racine et le statut `built`.

Le 7 septembre 2026 à 01:39 UTC, la page et ses cinq ressources uniques ont répondu HTTP 200. Leurs empreintes SHA-256 correspondent aux fichiers compilés locaux. Le HTML comporte les deux occurrences du logo LN-IA. Ce contrôle autorise l’activation de `announcementUrl`, de canonical, de `og:url` et des messages de campagne vers l’annonce.

La vérification finale et les références de la version avec partage activé sont consignées dans `docs/PUBLICATION-2026-09-07.md` et `preuves/publication-http-2026-09-07.json` après déploiement.

## Effectuer une prochaine mise à jour

1. Obtenir l’instruction correspondante de modification, commit, push et publication ; inspecter les branches locales et distantes pour préserver les travaux existants.
2. Installer depuis le lockfile avec `npm ci`, puis exécuter `npm run ci`. Sous PowerShell, utiliser `npm.cmd` si nécessaire. Node.js 24 est la référence.
3. Contrôler le résultat avec `npm run preview` et effectuer la recette visuelle prévue. Une compilation réussie ne prouve pas le rendu navigateur.
4. Committer les sources et rapports concernés sur `main`, puis pousser cette branche. Un push de `main` seul ne met pas le site à jour.
5. Dans un checkout isolé de `gh-pages`, remplacer uniquement les fichiers publiés par le nouveau contenu compilé : `index.html` à la racine, les fichiers référencés de `assets/` et les trois images utilisées. Conserver `.nojekyll`, retirer les anciens fichiers compilés devenus inutiles. Ne pas copier un dossier `dist/` imbriqué, les sources, les documents ou les journaux.
6. Vérifier le diff, committer en citant le commit source, puis pousser `gh-pages` sans forcer. Ce push déclenche la publication GitHub Pages de cette branche.
7. Attendre le succès de Pages pour ce commit, puis vérifier la page publique et chaque ressource, leurs empreintes et les métadonnées. Consigner les résultats réels.

`base: './'` conserve des chemins relatifs adaptés au sous-chemin GitHub Pages. `dist/` reste ignoré dans les sources et ne doit pas être modifié manuellement. Le checkout local `.preparation-commit/gh-pages` est ignoré ; il n’est pas une seconde copie des sources à éditer.

Pour un retour à une version antérieure, préparer un nouveau commit rétablissant les fichiers compilés de la version retenue, après instruction du pilote. Conserver l’historique et éviter les pushes forcés.

## Limites et contrôles humains

L’accord visuel du pilote ne constitue pas une preuve de vérification par l’agent sur mobile, tablette, clavier, zoom 200 % ou lecteur d’écran. Les composeurs et aperçus sociaux n’ont pas été vérifiés en situation. Aucun `og:image` dédié n’est configuré. Aucun message n’a été envoyé sur les réseaux sociaux.

Les rapports précédents restent l’historique des étapes avant publication ; le rapport de publication indique l’état le plus récent. `preuves/controle-statique.json` décrit uniquement le périmètre du script statique, pas la totalité des contrôles de livraison.

Références : [configuration de la source Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [API Pages](https://docs.github.com/en/rest/pages/pages).
