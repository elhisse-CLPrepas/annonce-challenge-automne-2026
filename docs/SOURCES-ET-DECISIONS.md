# Sources, faits et décisions

Date de revue documentaire : 6 septembre 2026. Lecture des dépôts via le plugin GitHub, sans modification distante. Ce document ne constitue pas une recette HTTP actuelle de GitHub Pages.

## Registre des sources

| Source | Référence examinée | Ce qui est utilisé |
|---|---|---|
| [Challenge historique](https://github.com/elhisse-CLPrepas/challenge-01-juin-2026) | `main`, commit `07689197cca41f5c14240cb135dec2f67e4ac3ea` | README, offre de référence et programme : pratique, sept modules, progression par livrables |
| [Atelier-Dev-Moderne](https://github.com/elhisse-CLPrepas/atelier-dev-moderne) | Arbre `4ecfe74e5f8a9dd6faa7f25c0ef08ce5500ca59e` ; `AGENTS.md`, blob `1867b13ff10a164cf31c68c1c952656c7eef33a7` | Autorité humaine, limites des agents, qualité, sécurité, traçabilité |
| [Offre, fichier source](https://github.com/elhisse-CLPrepas/offre-formation-ia/blob/main/index.html) | `main/index.html`, blob `031ae6567b075cd18fb89454d961da01ba3904f1` | Contenu Automne 2026, date, sept modules, rythme, communauté et candidature |
| [Portfolio](https://github.com/elhisse-CLPrepas/portfolio-formation-ia-ln-ia) | `main`, commit `76883369d3fed2f07aec576f952e382fec80c9c8` | Session d’automne, progression PWA V1/V2, contrôles et métadonnées des preuves |
| Deux affiches jointes | Copies locales fournies par l’utilisateur | Identité visuelle, portrait, métiers, date et environnement Codex |
| [Modèles Codex — documentation officielle OpenAI](https://learn.chatgpt.com/docs/models) | Lecture web le 6 septembre 2026 | Nom Astra, commande `codex -m gpt-6-astra`, capacités générales et disponibilité conditionnelle |
| [Guide officiel Vite](https://vite.dev/guide/) | Lecture web le 6 septembre 2026 | Entrée HTML, installation et compilation statique |

Les SHA d’arbre et de blob ne sont pas présentés comme des commits. Les sources privées peuvent nécessiter vos droits habituels ; elles ne sont pas copiées intégralement dans ce pack.

## Réconciliation des contenus

| Sujet | Décision retenue | Limite |
|---|---|---|
| Date | Vendredi 25 septembre 2026 | Confirmée par la demande, les affiches et les sources d’automne |
| Format | Environ 14 semaines, 28 séances, 2 par semaine, 100 % en ligne, 20 maximum | Présent dans le HTML d’automne de l’offre et les affiches ; ne signifie pas « 20 places encore disponibles » |
| Rythme | Lundi : comprendre/cadrer ; vendredi : pratiquer/produire/corriger | Présent dans la section format et la FAQ de l’offre ; heures exactes non renseignées |
| Modules | Les sept intitulés synthétiques de l’offre d’automne | Les séances détaillées du dépôt de juin restent un historique pédagogique |
| Tarifs/remises | Non affichés | Les anciens tarifs et remises de juin ne prouvent pas les conditions d’automne |
| Communauté | Invitation publique My-Community-IA | Le groupe ne confirme pas l’inscription |
| Preuves | Fiches et synthèses publiques | Ne pas transformer un statut documentaire en application déployée ou en réussite garantie d’un apprenant |
| GPT-6 Astra | Présentation prudente, source officielle liée | Modèle accessible selon compte et déploiement ; aucune garantie de résultat ou affiliation OpenAI |
| Publication de ce pack | Non effectuée | Ni l’offre ni les dépôts sources n’ont été modifiés |

Le portfolio décrit une progression PWA V1 vers V2 avec corrections documentées. Les contrôles historiques consignés n’ont pas été rejoués ici et ne sont pas les contrôles de ce nouveau mini-site.

## Preuves publiques ciblables

- Progression générale : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#progression
- Contrôles : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#controle
- Publication du portfolio : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#publication
- P04, PWA V1 : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/preuves/index.html#p04
- P05, PWA V2 : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/preuves/index.html#p05
- P10, portail Module 07 : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/preuves/index.html#p10

La page d’annonce emploie les trois premières ancres pour rester une porte d’entrée simple. Les liens P04/P05/P10 sont disponibles pour un enrichissement ciblé, après relecture du statut exact.

## Influence du cadre Atelier-Dev-Moderne

Ont été lus : `README.md`, `AGENTS.md`, les neuf règles `.cursor/rules/` portant sur fondations, architecture, tests, sécurité, documentation, preuves, environnement, orchestration et vigilance face aux instructions externes ; puis `protocols/handoff-agent.md`.

La règle d’orchestration, blob `b85f46c063025db32f8ee435783d893d1239d498`, définit A-PLAN, A-ARCHI, A-DEV, A-TEST, A-REVIEW, A-DOC. Le protocole de handoff examiné porte le blob `5926add624b78ad6a70a189e69f73e5f4fc08184`.

Le pack adapte ces responsabilités et garde-fous ; il n’installe pas le dépôt source ni ses compétences. Les référentiels de validation détaillés n’ont pas été reproduits ni déclarés satisfaits. Aucune certification ou gate humain n’est auto-validé.

## Décisions techniques

1. Vite avec HTML/CSS/JavaScript natifs : une page et des liens ne nécessitent pas une application complexe.
2. Deux affiches originales conservées, sans recréer le portrait ni modifier les textes intégrés.
3. Liens de secours HTML : la page reste lisible et utile sans JavaScript.
4. Paramètres UTM limités aux canaux autorisés ; ni stockage navigateur, ni collecte, ni pixels.
5. Partage vers l’offre existante avant publication de l’annonce ; URL canonique seulement si `announcementUrl` est renseignée.
6. Emplacement d’annonce proposé sous l’offre existante : aucune seconde offre concurrente et aucune modification de la page racine.
7. Pas de déploiement automatique, pas de copie des dépôts privés, pas de secret dans le ZIP.

Les contenus exacts des affiches restent la responsabilité de leur propriétaire. Avant une diffusion publique, confirmer les droits d’usage du portrait, du nom et des marques présentes. Le pack n’affirme aucun partenariat avec OpenAI, Microsoft, GitHub ou les plateformes sociales.

## Mise à jour du 7 septembre 2026 — affiche de l’offre

Sur demande du pilote, la nouvelle image `ChatGPT Image 7 sept. 2026, 01_28_35.png` a été nommée « Offre Challenge 100 Jours — Automne 2026 », puis déplacée dans `public/images/affiche-offre-challenge-100-jours-automne-2026.png`. Son contenu est inchangé, avec conservation de l’empreinte SHA-256 après déplacement. Dimensions : 1024 × 1536 pixels.

Emplacement retenu : bloc d’accueil, à la place de l’ancienne affiche Astra, à droite sur ordinateur et sous le texte avec les styles mobiles existants. L’affiche et sa légende renvoient vers l’offre `#candidature` via la logique de liens existante. L’ancienne affiche Astra et l’affiche métiers sont conservées. Cette intégration locale ne constitue pas une publication.

## Finalisation du 7 septembre 2026 — parcours et maintenance

Les liens « Découvrir l’offre » du hero, de l’affiche et de sa légende ouvrent désormais le début de la page commerciale. Les liens « Présenter mon besoin » gardent `#candidature`, le programme garde `#programme`. Cette décision remplace la destination de l’affiche décrite dans l’étape précédente. Le raccordement DOM est isolé dans `src/page-links.js`, testé avec les liens du HTML ; les fonctions de construction des URLs restent pures dans `src/links.js`.

Le texte d’accueil privilégie le besoin réel et les productions. Le rôle pédagogique des outils remplace le superlatif commercial sur Astra. La distinction entre communauté et inscription apparaît dès l’accueil. Le calendrier, les conditions, les images et la destination commerciale restent ceux de la session d’automne.

Vite passe de 8.0.13 à 8.0.16, version corrective de la même branche : voir l’[avis officiel sur les chemins Windows](https://github.com/vitejs/vite/security/advisories/GHSA-fx2h-pf6j-xcff). Aucun nouvel outil d’interface ni service externe ajouté. L’installation depuis le lockfile et la chaîne CI ont été rejouées ; npm ne signale plus de vulnérabilité lors de cette vérification. Les références historiques ci-dessus ne sont pas réécrites.

## Intégration du logo — 7 septembre 2026

Source : fichier `logo-LN-IA.png` fourni par le pilote, 1774 × 887 pixels. Copie exacte dans `public/images/logo-LN-IA.png`, original conservé. Logo entier sur son fond blanc dans l’en-tête (148 px de large sur ordinateur, 112 px sur mobile) et dans le pied de page (180 px). Le ratio 2:1 est préservé et chaque logo est un lien vers `#accueil` avec un nom accessible. Les fichiers source, public et dist ont la même empreinte SHA-256. Aucun recadrage ni nouveau dessin.

## Décision du pilote — dépôt séparé et commit local

Le pilote a autorisé le commit et choisi `https://github.com/elhisse-CLPrepas/annonce-challenge-automne-2026.git`. La lecture `git ls-remote` a réussi sans retourner de branche : aucun historique distant à reprendre au moment de cette vérification. Le dossier local est initialisé sur `main` et ce dépôt est configuré comme `origin`.

Cette décision remplace la proposition initiale d’hébergement sous l’offre. L’adresse prévue devient `https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/`, consignée dans `proposedAnnouncementUrl`. `announcementUrl` reste nul jusqu’à la mise en ligne vérifiée. L’offre commerciale et le portfolio conservent leurs adresses. Aucun push, réglage Pages ou déploiement n’est inclus dans le commit local.
