# Piiquante
Projet 6 - Construisez une API sécurisée pour une application d'avis gastronomiques - Piiquante

## Contexte
La marque de condiments à base de piment Piiquante veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .
La responsable produit de Piiquante souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. 
Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

## Clonage du répo

* Cloner le projet : https://github.com/justines8/Piiquante.git


## Démarrer le serveur

```
cd backend
npm run dev
```

## Démarrer le frontend

```
cd frontend
npm install
npm run start
```

## Langages utilisés

* JAVASCRIPT (sans FrameWorks)
* NODE

## Base de données utilisée

* MONGO DB 

## Exigences de sécurité

- Le mot de passe de l'utilisateur doit être haché.
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.
- La sécurité de la base de données MongoDB (à partir d'un service tel queMongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.
-  Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
- Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés.
- Le contenu du dossier images ne doit pas être téléchargé sur GitHub.

## Variables d'environnement 

- DB_MAIL : adresse mail utilisée pour accéder à la base MongoDB
- DB_PASS : mot de passe utilisé pour accéder à la base MongoDB
- DB_CLUSTER : cluster de la base MongoDB
- DB_TEST : test de la base MongoDB
- AUTH_TOKEN : jeton d'authentification pour la connexion
- URL_FRONT : URL du front 
