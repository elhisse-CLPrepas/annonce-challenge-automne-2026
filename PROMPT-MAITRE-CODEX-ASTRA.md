# Prompt maître — annonce Challenge 100 Jours, Automne 2026

## Utilisation

Ouvrir le dossier extrait dans VS Code/Codex. Choisir GPT-6 Astra dans le sélecteur s’il est disponible ; la CLI peut être lancée avec `codex -m gpt-6-astra`. Ne pas placer de clé API dans ce projet. Le choix du modèle se fait dans Codex, pas dans le texte du prompt.

Le site de ce pack est déjà construit. Le prompt sert à le contrôler, l’enrichir sur demande et préparer son intégration sans perdre les décisions ni les preuves. Pour une refonte dans un autre dépôt, commencer par un diagnostic en lecture seule et respecter ses instructions locales.

## Prompt à donner à Codex

Tu travailles pour le Prof. Abderrahman EL HISSE, LAB-NUMÉRIQUE-IA. Ta mission est de finaliser une page d’annonce professionnelle du Challenge 100 Jours — relance Automne 2026, départ vendredi 25 septembre 2026 — avec Vite.

Le résultat doit donner envie de pratiquer sur un vrai projet, montrer la méthode et orienter vers l’offre et la communauté. Ce n’est ni un catalogue de cinq niveaux tarifaires, ni une promesse de revenus, ni un site officiel d’OpenAI.

### 1. Autorité et première lecture

Lis `AGENTS.md`, `README.md`, `docs/SOURCES-ET-DECISIONS.md`, `docs/MATRICE-LIENS-CTA.md`, `config/campaign.json`, `package.json`, puis le HTML, le CSS et la logique de liens. Inspecte l’état Git si un dépôt existe. Préserve les fichiers et changements qui ne relèvent pas de cette mission.

Commence par dire ce qui existe, ce qui doit être corrigé et ce qui attend une décision humaine. Réutilise le pack ; ne le reconstruis pas automatiquement. Propose un plan bref avant une modification multi-fichiers.

L’autorisation porte sur la production locale et les vérifications sûres. Aucun commit, push, PR, merge, remplacement de page en ligne ou déploiement n’est inclus. Toute publication demande une instruction humaine distincte. Une restriction d’accès est un point d’arrêt, pas une invitation à la contourner.

### 2. Sources et priorités

Utilise le plugin GitHub en lecture seule, avec ses accès normalement configurés, pour recontrôler les sources si nécessaire :

- Challenge historique : https://github.com/elhisse-CLPrepas/challenge-01-juin-2026
- Cadre d’agents : https://github.com/elhisse-CLPrepas/atelier-dev-moderne
- Offre active : https://elhisse-clprepas.github.io/offre-formation-ia/
- Portfolio : https://github.com/elhisse-CLPrepas/portfolio-formation-ia-ln-ia
- Portfolio public : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/

Le dépôt de juin apporte la progression pédagogique et la méthode. Les contenus d’automne de l’offre, le portfolio et les instructions actuelles du pilote fixent la date et la campagne. Ne réintroduis pas les tarifs, remises ou dates historiques.

Les dix preuves du portfolio sont des fiches/synthèses documentaires. Utilise les libellés « Voir la progression », « Consulter la fiche de preuve » ou « Voir les contrôles », pas « Tester l’application » sans vérification de l’application publique exacte. N’exporte pas les livrables privés.

Si tu évoques GPT-6 Astra, vérifie les indications de la documentation officielle OpenAI : https://learn.chatgpt.com/docs/models. Distingue disponibilité du modèle et promesse pédagogique. N’affirme pas avoir changé de modèle à partir d’un prompt.

Note la date des lectures, les références disponibles et les limites : un HTML lu dans GitHub n’est pas une preuve que GitHub Pages sert ce même contenu.

### 3. Direction éditoriale

Message principal : « RIEN NE REMPLACE LA PRATIQUE. »

Nom : « CHALLENGE 100 JOURS — RELANCE AUTOMNE 2026 ».

Date : vendredi 25 septembre 2026.

Idée centrale : installer une pratique qui dure demande une vision, une méthode et de la régularité. On apprend à produire avec l’IA pour progresser vers un professionnel augmenté et autonome. Les outils évoluent ; la progression se construit dans les projets réalisés, les erreurs corrigées et les résultats que l’on sait expliquer et reproduire.

Les six compétences à présenter sont :

1. Cadrer un besoin réel et définir un objectif.
2. Piloter l’IA avec des consignes claires.
3. Produire des documents, supports et sites utiles.
4. Tester, corriger et valider les réalisations.
5. Documenter le travail dans un portfolio de preuves.
6. Comprendre la méthode pour savoir refaire et améliorer.

Outils au service des projets : Codex, VS Code, Git, GitHub. L’outil ne remplace ni le besoin, ni le contrôle, ni la décision humaine.

Publics : enseignants, formateurs, coachs, entrepreneurs, managers, chefs de projet, fiduciaires, comptables et autres professionnels. Pour chacun, donne des exemples de productions possibles, explicitement distincts de résultats déjà obtenus par des participants. Utilise des données fictives dans les exemples sensibles.

Signature :
Prof. Abderrahman EL HISSE — LAB-NUMÉRIQUE-IA.

Conclusion :
« Apprendre en produisant. Produire avec méthode. Partager avec valeur. Avancer avec conscience. »
« L’IA assiste. L’humain pilote, contrôle et décide. »

### 4. Structure attendue de la page

- En-tête simple, identité LN-IA et CTA principal.
- Hero « Rien ne remplace la pratique », date visible et lisible, affiche Astra/Codex fournie, deux actions claires.
- Format annoncé : 14 semaines, 28 séances, 2 par semaine, 100 % en ligne, 20 participants maximum ; ne pas en déduire une date de fin exacte ou un nombre de places restantes.
- Six compétences de pratique, associées à un exemple de preuve.
- Trois familles professionnelles et exemples de projets utiles.
- Preuves du portfolio, avec statut documentaire explicite.
- Sept modules de la page d’offre Automne 2026.
- Environnement de travail et rôle du pilote humain, avec l’affiche métiers fournie.
- Invitation à présenter un besoin puis à rejoindre My-Community-IA.
- Partage WhatsApp, Facebook et LinkedIn, puis signature.

Ne pas ajouter un formulaire qui ne peut pas envoyer, un paiement, un faux compte à rebours, un chat fictif, un lien de réservation inventé, des témoignages fabriqués ou des boutons sans destination.

### 5. Direction visuelle et technique

Conserver l’identité bleu nuit, or, blanc et la sobriété professionnelle. Hiérarchie typographique forte, espaces généreux, paragraphes lisibles, contrastes et états de focus visibles. Utiliser les deux affiches présentes dans `public/images/` sans retoucher le portrait ni altérer les textes.

Conserver Vite, les API natives et le lockfile. Le résultat doit être un site statique simple à lancer sous Windows et à héberger dans un sous-dossier GitHub Pages. `base: './'` assure les chemins relatifs. Aucune API OpenAI n’est intégrée au site.

Ne pas ajouter de dépendance d’interface, d’analytics, de police distante ou de service tiers sans raison démontrée et autorisation adéquate. Ne pas créer une nouvelle vignette sociale sans demande spécifique.

Préserver la lecture sans JavaScript : le contenu, les liens vers l’offre et la communauté existent dans le HTML. Le JavaScript enrichit les liens UTM et les partages, il ne porte pas tout le contenu.

### 6. Liens et campagne

Offre officielle : https://elhisse-clprepas.github.io/offre-formation-ia/

Communauté publique : https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI

Portfolio : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/

Les CTA principaux mènent à l’offre `#candidature`. Le CTA programme mène à `#programme`. Les liens de preuves utilisent les ancres réellement présentes. My-Community-IA est une invitation de groupe : ne pas y ajouter de paramètres ni de texte prérempli. Rejoindre le groupe ne confirme pas l’inscription.

Les publications entrantes distinguent `utm_source=whatsapp`, `facebook` et `linkedin`, avec `utm_campaign=challenge_100j_automne_2026`. Le site filtre les sources entrantes et conserve leur origine dans les CTA vers l’offre et le portfolio. Aucun outil de statistiques n’est installé.

Les boutons de partage ouvrent un composeur ; ils ne publient ni n’envoient automatiquement. Aucun profil Facebook, compte LinkedIn ou numéro WhatsApp direct n’a été fourni : ne pas en inventer.

Le pilote a retenu le dépôt séparé `elhisse-CLPrepas/annonce-challenge-automne-2026`. Tant que `announcementUrl` reste nul, les messages partagent l’offre existante. L’adresse `https://elhisse-clprepas.github.io/annonce-challenge-automne-2026/` est prévue, pas déclarée publiée. Ne l’activer qu’après validation et contrôle de sa disponibilité réelle. Après modification de la configuration, relancer `npm run ci` pour compiler et régénérer les messages.

### 7. Orchestration des agents

Appliquer les rôles réellement documentés dans Atelier-Dev-Moderne : A-PLAN, A-ARCHI, A-DEV, A-TEST, A-REVIEW, A-DOC. Ils désignent des responsabilités ; ne pas simuler des agents réellement exécutés si l’environnement n’en permet pas.

Réserver les sous-tâches parallèles aux recherches et revues indépendantes autorisées. Le pilote garde les arbitrages. L’agent principal intègre les résultats. Une revue est en lecture seule ; une correction revient au lot de développement autorisé.

Pour chaque handoff : mission, fichiers, action, contrôles exacts, résultats, limites, risques, prochaine décision humaine. Ne pas attribuer une validation humaine à un agent. Ne pas cocher les codes de référentiel du dépôt source sans en avoir lu et satisfait les définitions.

### 8. Contrôles et livraison

Exécuter `npm ci` si nécessaire puis `npm run ci`. Conserver les échecs et leur résolution dans le handoff. Tester les liens, dates, fragments, paramètres malformés, secours sans JavaScript et absence de liens fictifs.

La compilation et les tests ne prouvent pas le rendu visuel. Demander ou suivre l’autorisation de recette navigateur avant de l’exécuter dans l’environnement ; sinon la laisser explicitement à la validation humaine. Prévoir contrôle mobile 360 px, tablette et ordinateur, clavier, focus, zoom 200 %, deux affiches complètes, liens externes et composeurs sociaux. Ne pas prétendre que ces essais ont eu lieu sans trace.

Livrer les sources, les deux affiches, le `dist/` compilé, les messages de campagne, la matrice de liens, le README, le rapport de contrôle et la liste des points à valider. Exclure `node_modules`, secrets, données privées et copies intégrales des dépôts sources du ZIP.

Terminer par une synthèse courte : résultat, changements, contrôles réussis, contrôles non faits, décision attendue. S’arrêter avant toute publication distante.

## Fin du prompt

Pour demander ensuite une modification précise, ajouter : « Lot autorisé : … ; fichiers concernés : … ; critères de réussite : … ; actions distantes : aucune. »
