# Logo LN-IA et prochaine étape avant commit

État du 7 septembre 2026. Pilote : Prof. Abderrahman EL HISSE.

## Mission réalisée

Intégrer le vrai logo fourni dans l’en-tête visible et le pied de page, à la place du monogramme textuel. L’image entière et son fond blanc sont conservés, sans déformation. Les logos servent aussi de liens vers l’accueil.

- En-tête : à gauche, largeur 148 px sur ordinateur et 112 px sur mobile.
- Pied de page : à gauche, largeur 180 px ; disposition en colonne avec les styles mobiles existants.
- Original : `logo-LN-IA.png`, conservé à la racine.
- Image utilisée : `public/images/logo-LN-IA.png`, copiée sans modification.
- Dimensions intrinsèques : 1774 × 887 pixels ; poids : 856 856 octets.

## Fichiers concernés

`index.html`, `src/style.css`, `public/images/logo-LN-IA.png`, `README.md`, `docs/SOURCES-ET-DECISIONS.md` et ce compte rendu. La chaîne CI a régénéré `dist/`, `preuves/controle-statique.json` et les fichiers de campagne. Aucune modification de dépendance ou de logique JavaScript dans ce lot.

## Contrôles effectués

- `npm.cmd run ci` : **réussi**, dont **21 tests / 0 échec**, build Vite 8.0.16 et validation statique de **7 références locales**.
- Aperçu HTTP : page et logo en **200** ; deux références au logo dans la page effectivement servie.
- Original, copie publique et copie compilée : SHA-256 identique, `c5deb19a2d80b8c53939844fbdcd3ed80ff5adcdd2f865e77f22ffa176e4c963`.
- Revue indépendante `review_affiche`, strictement en lecture seule : dimensions, liens, noms accessibles et espace disponible dans les règles CSS contrôlés. À 320 px avec une base de 16 px, le logo, l’écart et le bouton occupent au maximum 272 px dans un conteneur de 280 px. Ce calcul ne remplace pas une recette navigateur.
- Browser : aucun navigateur connecté ; rendu, clavier et zoom non contrôlés en situation.

## Prochaine étape : recette puis préparation du dépôt

1. **Ouvrir l’aperçu** à `http://127.0.0.1:4173/` et recharger la page (`Ctrl+F5` si nécessaire). Vérifier les deux logos, la lisibilité et l’équilibre avec les textes et boutons.
2. **Faire la recette** à 320/360 px, sur ordinateur et à 200 % de zoom. Parcourir les liens au clavier, vérifier les retours à l’accueil, l’offre, le portfolio et l’invitation WhatsApp. Confirmer l’éditorial et l’affiche.
3. **Choisir le dépôt cible** : ce dossier n’est actuellement pas un dépôt Git. Privilégier une intégration dans un checkout identifié du dépôt retenu, avec lecture de ses instructions et de son état Git. Une initialisation locale éventuelle demande une instruction explicite du pilote.
4. **Préparer un diff révisable** : sélectionner les sources, ressources, lockfile et documents utiles ; exclure `node_modules/` et les fichiers temporaires. Le `.gitignore` local exclut `dist/` : sa place dans un éventuel commit de publication dépend du fonctionnement du dépôt cible et ne doit pas être forcée à l’aveugle. Préserver l’offre racine.
5. **Relancer les contrôles dans le dépôt cible** après intégration, examiner les fichiers sélectionnés, puis demander l’instruction explicite de commit. Le push et le déploiement restent des actions distinctes.

## Handoff

**Produit et testé automatiquement ; validation visuelle humaine à effectuer ; aucun commit, push ou déploiement.** Décision attendue : valider l’aperçu et désigner le dépôt cible. Le poids du PNG n’a pas été optimisé ; son impact mobile reste à mesurer. Une compilation réussie ne vaut pas une validation humaine du rendu.
