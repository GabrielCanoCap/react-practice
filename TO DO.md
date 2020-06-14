# TO DO: 
* Une Liste
    * Manipulation de base: Tri
    * Manipulation de base: Recherche / Filtre (changement enregistrer dans l'url ! -> partage de recherche)
* Manipulation du router
    * history.push: Afichage du détail d'un élémen (history.push)t de la liste
* Manipulation d'un context:
    * Context d'authentification + données utilisateurs connecté
* Intégration:
    * Letter avatar: contrainte: même couleur si même lettre
* Formulaire et appel à l'API
    * Création d'un utilisateur (process simple sans validation d'adresse mail)
    * Mise à jour des information d'un utilisateur
* Modale / Popup
    * Modale de confirmation / validation / information

Dans le back on va avoir besoin de:
* parking: GET, PUT, POST, DELETE
* user: GET, PUT, POST, DELETE

# TO DO API: 
## Transverse
 * Ajouter passport pour setup authentifacation (JWT) <- sans mot de passe que login pour simplifier mais que dans le front on puisse manipler un token comme sur un cas réel (manipulation des context en front + auth)
 * Ecrire une doc minimal (README)
    * Build documentation
    * make/run migration
    * Run app
 * Ajouter une entité parking favori/suivie

## Entité parking

 * Tri sur les parking
 * Filtre sur les parking
 * Recherche type like sur certain champ

## Entité user
 * Faire le modèle de donnée
    * Nom, prenom, login (n'importe quoi), date de création
 * CRUD utilisateur (crud entier permet de faire un dashboard user -> pratique manipulation de formulaire)