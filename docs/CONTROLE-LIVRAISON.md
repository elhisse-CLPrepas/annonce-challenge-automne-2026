# Contrôle de livraison — V1

Statut au 7 septembre 2026, après finalisation : page produite et contrôlée automatiquement ; validation visuelle humaine et publication non effectuées. Voir `docs/FINALISATION-2026-09-07.md` pour le détail du dernier lot.

## Contrôles réellement exécutés

| Contrôle | Résultat |
|---|---|
| Installation des dépendances verrouillées | Réussie dans l’environnement Node 24 |
| Syntaxe JavaScript et configuration Vite | Réussie |
| Tests de date, liens, attribution et contenu | 21 réussis ; dont 7 tests de raccordement aux liens HTML avec un double DOM, sans moteur navigateur |
| Build Vite | Réussi avec Vite 8.0.16 ; sortie `dist/` incluse |
| Installation et audit npm | `npm.cmd ci` réussi ; 0 vulnérabilité signalée au moment du contrôle |
| Aperçu local HTTP | Page, JavaScript, CSS et deux affiches : HTTP 200 sur `127.0.0.1:4173` |
| Références locales du HTML compilé | Présentes : CSS, JavaScript et deux affiches, dont un lien d’ouverture |
| Ancres internes et identifiants | Contrôlés automatiquement |
| Langue, h1 et attributs des images | Contrôlés dans le HTML |
| Date visible aux lecteurs d’écran | Masquage du numéro du jour retiré ; test de non-régression ajouté |
| Campagne WhatsApp/Facebook/LinkedIn | Textes et liens générés ; aucun envoi |
| Revue indépendante du code | Lecture seule ; corrections intégrées et limites documentées |

Le rapport `preuves/controle-statique.json` contient l’horodatage réel du contrôle statique, la version Node et les références locales inspectées. Il ne prouve pas un contrôle visuel ou réseau. Les tests se relancent avec `npm run ci` ; ne pas réutiliser ce statut après modification sans les relancer.

## Non exécuté — à valider avant diffusion

- Rendu dans des navigateurs réels à 320/360 px, tablette et ordinateur ; aucun navigateur connecté pendant le dernier lot.
- Navigation complète au clavier, lecteur d’écran et zoom 200 %.
- Réponses HTTP actuelles des destinations externes et présence des ancres en production.
- Ouverture réelle des trois composeurs sociaux dans les comptes du pilote.
- Aperçus de partage et choix d’affiche accompagnant la publication.
- Disponibilité des modèles Codex dans le compte du participant.
- Conditions commerciales détaillées et calendrier horaire d’automne.
- Intégration au dépôt, commit, push, PR, merge et publication.

La page comporte des styles responsive, des états de focus et des liens de secours HTML. Leur présence dans le code ne constitue pas une certification d’accessibilité ou une recette visuelle réussie.

## Limites explicites

- Les dix preuves du portfolio ne sont pas dix démos publiques validées aujourd’hui.
- Les paramètres UTM n’enregistrent pas de données de fréquentation.
- Les affiches sont conservées telles que fournies, sans correction des textes intégrés.
- La page est dédiée à septembre 2026. Une nouvelle session demande une révision éditoriale et des tests, pas seulement la modification d’un champ de date.
- Aucun tarif, remise, faux témoignage, compte social personnel ou lien de paiement n’a été ajouté.

Décision attendue du pilote : valider l’éditorial et l’emplacement proposé, réaliser la recette humaine, puis autoriser séparément la publication.
