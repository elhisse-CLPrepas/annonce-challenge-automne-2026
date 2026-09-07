# Intégration de l’affiche de l’offre — 7 septembre 2026

## Mission réalisée

Nommer l’image fournie par le pilote et remplacer une ancienne affiche pour mettre l’offre en évidence. Emplacement retenu et annoncé : à droite du bloc d’accueil sur ordinateur, sous le texte avec les styles mobiles existants.

- Nom éditorial : **Offre Challenge 100 Jours — Automne 2026**.
- Fichier fourni : `ChatGPT Image 7 sept. 2026, 01_28_35.png`.
- Fichier renommé et déplacé : `public/images/affiche-offre-challenge-100-jours-automne-2026.png`.
- Dimensions : 1024 × 1536 pixels ; poids : 2 089 335 octets.
- SHA-256 conservé : `14893d99c6f48b905b7d2514a6f09c778cfa47fbcf1deae8a98efc6f741a137a`.

L’image n’a pas été retouchée. Elle remplace la référence à `affiche-astra-codex.png` dans le hero. L’ancienne image reste disponible dans `public/images/`. L’affiche métiers reste à son emplacement.

Le libellé « L’OFFRE CHALLENGE 100 JOURS » et la légende « Découvrir l’offre de formation » explicitent sa fonction. L’image et sa légende pointent vers l’offre `#candidature`, avec liens HTML utilisables sans JavaScript et attribution UTM via le code existant.

## Fichiers concernés

- `index.html` : image, dimensions, texte alternatif, légende et deux liens vers l’offre.
- `public/images/affiche-offre-challenge-100-jours-automne-2026.png` : image déplacée et renommée.
- `README.md`, `docs/SOURCES-ET-DECISIONS.md`, `docs/MATRICE-LIENS-CTA.md` : nom, provenance, emplacement et liens documentés.
- `dist/` : version compilée régénérée, incluant la nouvelle affiche.
- `preuves/controle-statique.json` : nouveau contrôle de la compilation.
- `campagne/` : régénérée par la chaîne CI, sans changement de destination configurée.
- Ce compte rendu : suivi du lot.

Aucun changement de CSS, de logique JavaScript ou de version de dépendance. Installation locale de `node_modules/` depuis le lockfile existant.

## Contrôles réalisés

| Contrôle | Résultat |
|---|---|
| Inspection de l’image fournie | Réalisée ; nom et description adaptés à son contenu. |
| Empreinte avant/après déplacement | Identique. |
| Installation `npm.cmd ci --fetch-retries=0 --fetch-timeout=20000` | Réussie avec l’accès réseau autorisé ; 15 paquets installés. |
| `npm.cmd run ci` | Réussie : syntaxe, 14 tests, build Vite, validation statique et génération de campagne. |
| Validation statique du build | 9 identifiants et 5 références locales contrôlés. |
| Contrôle ciblé avec Node | Image source/dist identique ; dimensions 1024 × 1536 correctes ; ancienne référence absente du HTML compilé ; deux liens HTML de secours présents ; attribution LinkedIn et source inconnue vérifiées via les fonctions existantes. |
| Disponibilité du navigateur | Liste vide ; recette visuelle et DOM non exécutée. |
| Revue indépendante A-REVIEW | Sous-agent `review_affiche`, lecture seule : références, dimensions, liens, styles et documentation cohérents ; formulation du README précisée après revue. Aucun défaut fonctionnel identifié dans ce périmètre. |

La restriction d’installation constatée pendant l’audit précédent a été levée pour cette installation autorisée. Le build a cette fois été effectivement reproduit.

## Risques, limites et suite

Lors de ce lot, `npm.cmd audit --json` signalait une dépendance vulnérable, Vite 8.0.13, avec une sévérité maximale élevée : [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) et [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3). Aucune mise à niveau n’avait été effectuée dans ce lot d’intégration d’image. Cette alerte a ensuite été traitée dans le [lot de finalisation](FINALISATION-2026-09-07.md) avec Vite 8.0.16 et une nouvelle vérification.

La nouvelle affiche pèse environ 2,09 Mo, contre 0,57 Mo pour l’ancien visuel du hero ; son impact sur le chargement mobile n’a pas été mesuré. Le rendu mobile, le clavier, le focus sur les nouveaux liens et l’ouverture réelle de l’offre restent à contrôler dans un navigateur.

**Statut : produit localement et testé automatiquement ; à valider visuellement par le pilote ; non publié.** Décision attendue : validation de l’emplacement proposé et recette visuelle. Aucune action Git ni publication distante n’a été réalisée.
