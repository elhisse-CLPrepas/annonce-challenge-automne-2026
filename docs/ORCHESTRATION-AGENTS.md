# Orchestration — responsabilités et passage de relais

Adaptation des six rôles du dépôt Atelier-Dev-Moderne, sans installation automatique. Le modèle GPT-6 Astra peut être sélectionné dans Codex s’il est disponible ; ce document ne prouve pas quel modèle a exécuté un travail donné.

| Moment | Rôle | Action bornée | Passage de relais |
|---|---|---|---|
| Avant un lot multi-fichiers | A-PLAN | Sources, objectif, fichiers, critères, risques | Plan soumis au pilote |
| Si choix durable | A-ARCHI | Examiner structure, dépendances, hébergement | Décision expliquée, impact réversible |
| Production autorisée | A-DEV | Implémenter sans élargir le périmètre | Fichiers changés et limites |
| Vérification | A-TEST | Tests normaux, cas limites, compilation | Résultats observés, pas une promesse |
| Relecture indépendante | A-REVIEW | Lecture seule ; classer les défauts | Corrections proposées à A-DEV |
| Livraison | A-DOC | Mettre à jour guides et preuves vérifiées | Handoff au pilote humain |

Une mission peut cumuler plusieurs responsabilités sans créer six processus. Une délégation réelle doit être déclarée avec son périmètre ; une simple liste de rôles ne constitue pas une exécution multi-agent.

## Exemple de lot utile

Mission : remplacer le lien de partage de l’offre par l’adresse d’annonce approuvée.

- A-PLAN : confirmer l’URL et l’autorisation ; identifier configuration, tests et campagne.
- A-DEV : modifier uniquement `announcementUrl` ; ne pas publier.
- A-TEST : reconstruire, vérifier canonical/og:url, URL partagées et ressources relatives.
- A-REVIEW : vérifier qu’aucun lien de groupe, contenu tarifaire ou fichier de l’offre n’a changé.
- A-DOC : régénérer messages et matrice ; lister le contrôle public encore attendu.
- Pilote : décider de la publication puis de la diffusion des messages.

## Modèle de handoff

```text
Mission :
Périmètre autorisé :
Fichiers créés/modifiés :
Actions réalisées :
Commandes exécutées et résultats :
Défauts corrigés :
Contrôles non réalisés :
Risques et limites :
Statut : produit / testé automatiquement / à valider humainement / publié
Décision humaine attendue :
```

## Ce qui a réellement été délégué pour cette V1

Une recherche en lecture seule du Challenge et du portfolio, puis une revue statique indépendante du HTML et des liens. L’agent principal a réalisé et intégré le site. La revue a signalé un numéro de jour masqué aux lecteurs d’écran et des valeurs de configuration partiellement inutilisées. Le jour a été rendu accessible ; les valeurs de campagne et le libellé de partage ont été raccordés ; les limites d’un pack dédié à une seule session sont documentées.

Aucun agent n’a validé la publication au nom du pilote. Aucune recette navigateur n’a été effectuée dans ce lot.
