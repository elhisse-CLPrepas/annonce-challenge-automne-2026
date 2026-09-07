# Matrice des CTA — V1 à contrôler avant publication

## Entrées depuis les réseaux

Les URL complètes pour WhatsApp, Facebook et LinkedIn sont générées dans `campagne/LIENS-ET-DIFFUSION.md` et `campagne/liens-entrants.csv`. Elles utilisent l’offre existante tant que `announcementUrl` est nul. Aucune URL d’annonce non publiée n’est diffusée par défaut.

| Paramètre | Règle |
|---|---|
| `utm_source` | `whatsapp`, `facebook`, `linkedin` ; `annonce` pour une visite directe/inconnue |
| `utm_medium` | `organic` par défaut ; entrées reconnues : `organic`, `social`, `paid_social`, `referral` |
| `utm_campaign` | `challenge_100j_automne_2026` |
| `utm_content` | `pratique_v1` pour l’entrée sociale ; emplacement du CTA pour les sorties |

Ces paramètres décrivent des liens, pas des statistiques. Aucun tableau de fréquentation n’existe sans dispositif de mesure supplémentaire à autoriser et configurer séparément.

## Sorties de la page

| Emplacement | Destination HTML de secours | `utm_content` après exécution du JavaScript |
|---|---|---|
| En-tête : présenter mon besoin | https://elhisse-clprepas.github.io/offre-formation-ia/#candidature | `annonce_header` |
| Hero : découvrir l’offre de formation | https://elhisse-clprepas.github.io/offre-formation-ia/ | `annonce_hero` |
| Affiche de l’offre dans le hero | https://elhisse-clprepas.github.io/offre-formation-ia/ | `annonce_affiche` |
| Légende : découvrir l’offre de formation | https://elhisse-clprepas.github.io/offre-formation-ia/ | `annonce_legende-affiche` |
| Programme : consulter | https://elhisse-clprepas.github.io/offre-formation-ia/#programme | `annonce_programme` |
| Invitation finale : présenter mon besoin | https://elhisse-clprepas.github.io/offre-formation-ia/#candidature | `annonce_final` |
| Pied de page : formation | https://elhisse-clprepas.github.io/offre-formation-ia/ | `annonce_footer` |
| Portfolio : vue d’ensemble | https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/ | `preuve_overview` |
| Progression | https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#progression | `preuve_progression` |
| Contrôles | https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#controle | `preuve_controle` |
| Publication du portfolio | https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/#publication | `preuve_publication` |
| Pied de page : portfolio | https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/ | `preuve_footer` |
| Communauté, hero et invitation finale | https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI | Aucun : URL d’invitation inchangée |

Exemple d’un CTA hero après arrivée depuis LinkedIn :

```text
https://elhisse-clprepas.github.io/offre-formation-ia/?utm_source=linkedin&utm_medium=organic&utm_campaign=challenge_100j_automne_2026&utm_content=annonce_hero
```

Les liens de découverte ouvrent le début de l’offre ; les liens de candidature conservent `#candidature`, après les paramètres UTM. Un `data-anchor=""` explicite préserve l’absence de fragment. Le contenu de la query string entrante n’est pas réinjecté dans la page : seules les valeurs de source et medium reconnues sont conservées.

## Boutons de partage sortant

| Bouton | Mécanisme | Limite |
|---|---|---|
| WhatsApp | `https://wa.me/` avec paramètre `text` encodé | Ouvre un composeur ; l’utilisateur choisit le destinataire et confirme |
| Facebook | `https://www.facebook.com/sharer/sharer.php` avec `u` encodé | Partage une URL ; ne préremplit pas arbitrairement une publication au nom de l’utilisateur |
| LinkedIn | `https://www.linkedin.com/sharing/share-offsite/` avec `url` encodé | Partage une URL ; compte/confirmation selon le service |

Ces mécanismes sont construits et testés comme URL, mais leur ouverture dans des sessions réelles reste à contrôler. Les plateformes peuvent demander une connexion ou modifier leur interface. Les textes complets sont livrés séparément pour un copier-coller maîtrisé.

## Validation restante

- Contrôler que les pages publiques servent bien la version attendue et les ancres.
- Tester le lien de groupe sur un appareil autorisé, sans rejoindre ni envoyer automatiquement.
- Vérifier les trois composeurs avec vos comptes, sans publication involontaire.
- Confirmer l’adresse de l’annonce avant de renseigner `announcementUrl`.
- Vérifier le titre et la description de partage après publication ; aucune `og:image` dédiée n’est incluse.

Ni les comptes sociaux personnels ni les liens de réservation, paiement ou contact direct n’ont été fournis : ils ne sont pas inventés.
