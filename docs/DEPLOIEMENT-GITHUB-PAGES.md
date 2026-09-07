# GitHub Pages — dépôt séparé, publication à effectuer

## Destination retenue

Le pilote a choisi `https://github.com/elhisse-CLPrepas/annonce-challenge-automne-2026.git` pour les sources de cette annonce.

Adresse prévue, à vérifier après déploiement :

```text
https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/
```

L’offre reste à `https://elhisse-clprepas.github.io/offre-formation-ia/` et le portfolio conserve son adresse. La proposition initiale d’un sous-dossier dans le dépôt de l’offre est abandonnée. Aucun fichier ni réglage de ces deux sites n’est à modifier.

## Séparer les sources et la publication

- `main` contient les sources Vite, les images, les tests et les documents.
- `dist/` est généré et exclu du commit des sources.
- La racine de `main` contient le HTML source : elle ne doit pas être sélectionnée comme site statique sans compilation.
- Aucun workflow de publication automatique n’est ajouté.

Pour la prochaine étape, une branche dédiée `gh-pages` contenant uniquement le contenu compilé est proposée, avec publication depuis sa racine. Ce choix de configuration et son activation restent à effectuer sur instruction de déploiement. Un push sur la branche choisie pour Pages peut publier immédiatement.

Référence : [sources de publication GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Étapes de publication proposées, non exécutées

1. Relire le commit local, vérifier `origin` et l’absence de divergence distante, puis pousser les sources vers `main` après instruction correspondante.
2. Lire les réglages Pages du **nouveau dépôt** ; ne pas réutiliser ceux du dépôt de l’offre, qui avait été examiné pendant l’audit initial.
3. Reconstruire avec `npm ci` puis `npm run ci` (ou `npm.cmd` sous PowerShell). Vérifier l’aperçu et la recette humaine.
4. Préparer une branche de publication dans un checkout isolé. Y placer le contenu compilé, avec `index.html` à la racine, `assets/` et les images utilisées. Exclure sources, rapports, journaux, secrets et `node_modules/`. Ne pas copier un dossier `dist` imbriqué. Prévoir `.nojekyll` pour servir les fichiers statiques sans traitement Jekyll.
5. Après instruction de déploiement, pousser cette branche et configurer Pages sur `gh-pages`, dossier `/`, si le choix proposé est retenu. Conserver le commit publié pour permettre un retour contrôlé à la version précédente.
6. Vérifier l’URL publique, CSS, JavaScript, deux affiches, logo et liens. Ne pas déclarer la publication réussie sur la seule base du push.

`base: './'` conserve des chemins relatifs adaptés au sous-chemin du dépôt GitHub Pages. Aucune étape de cette procédure n’est exécutée par la simple création du commit des sources.

## Activer les partages de l’annonce après vérification

La première publication conserve `announcementUrl: null` : les partages pointent vers l’offre existante. Après vérification de l’annonce publique :

1. Renseigner son URL HTTPS confirmée dans `config/campaign.json`, sans paramètres ni fragment.
2. Relancer `npm run ci` pour générer canonical, `og:url`, liens et messages de campagne.
3. Vérifier ces valeurs, puis committer et publier la mise à jour sur instruction correspondante.

`proposedAnnouncementUrl` est uniquement documentaire. Sa valeur ne prouve aucune publication. Aucun `og:image` dédié n’est configuré ; les affiches peuvent être jointes manuellement aux publications après vérification des aperçus.

## Recette à consigner

- Automne 2026, départ vendredi 25 septembre 2026.
- Ressources sans erreur et logos lisibles en haut et en bas.
- Découverte vers le début de l’offre, candidature vers `#candidature`, programme vers `#programme`.
- Preuves vers les ancres du portfolio ; invitation My-Community-IA intacte.
- Rendu à 320/360 px, tablette, ordinateur, clavier et zoom 200 %.
- Composeurs sociaux et aperçu de partage vérifiés sans envoi automatique.

Le rapport doit distinguer le commit local, le push des sources, la publication des fichiers compilés, le contrôle HTTP public et la validation humaine. À ce stade, le déploiement reste à effectuer.
