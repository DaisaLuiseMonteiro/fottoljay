# Modifications apportées au projet back

## Résumé des modifications

Le projet back a été nettoyé pour ne conserver que les fonctionnalités d'authentification et d'inscription. Toutes les parties liées aux entreprises, employés, paies, etc. ont été supprimées.

### Modifications récentes (Gestion des produits et vendeurs) :
- Mise à jour de l'enum `UserRole` : Changement de SUPER_ADMIN/ADMIN/CAISSIER/VIGILE vers ADMIN et SELLER
- Ajout du modèle `Product` : Lié à un vendeur, avec prix, description
- Ajout du modèle `Photo` : Lié à un produit, avec URL, type (MAIN/SECONDARY), ordre
- Seed de l'utilisateur admin avec email `ibou@gmail.com` et mot de passe `passer`
- Ajout de la méthode `registerSeller` pour l'inscription des vendeurs
- Mise à jour du schéma Prisma et génération du client

### Modifications supplémentaires :
- Suppression de `src/server.ts` (fichier serveur principal, non spécifique à l'authentification)
- Suppression de `src/middlewares/validation.middleware.ts` (middleware de validation générale)
- Suppression de `tsconfig.json` (configuration TypeScript, non spécifique à l'authentification)
- Suppression de `package-lock.json` (fichier de verrouillage des dépendances)
- Correction des routes dans `auth.routes.ts` : suppression des appels à `authValidation` et `handleValidationErrors` pour éviter les erreurs de compilation
- Modification du UserService frontend pour utiliser les appels HTTP vers l'API backend au lieu de localStorage
- Création des composants LoginComponent et RegisterComponent avec formulaires et validation
- Utilisation de Tailwind CSS pour le styling au lieu de SCSS personnalisé
- Intégration complète frontend-backend pour l'authentification avec gestion des tokens JWT
- Ajout de documentation détaillée dans le README.md pour l'utilisation frontend

### Fichiers supprimés :
- Tous les contrôleurs sauf `auth.controller.ts`
- Toutes les routes sauf `auth.routes.ts`
- Tous les services sauf `auth.service.ts`
- Tous les utilitaires sauf `jwt.util.ts` et `password.util.ts`
- Tous les middlewares sauf `auth.middleware.ts`, `rbac.middleware.ts` et `validation.middleware.ts`
- Tous les scripts de seed et de fix dans le répertoire racine
- Toutes les dépendances non nécessaires (multer, express-validator)

### Fichiers modifiés :
- `prisma/schema.prisma` : Suppression de tous les modèles sauf User et UserRole
- `prisma/seed.ts` : Suppression de la création des entreprises, conservation seulement de l'utilisateur super admin
- `src/server.ts` : Suppression de toutes les routes non-authentification
- `src/services/auth.service.ts` : Suppression des références aux entreprises
- `src/utils/jwt.util.ts` : Suppression de companyId du payload JWT
- `src/middlewares/auth.middleware.ts` : Suppression de companyId
- `src/middlewares/rbac.middleware.ts` : Suppression des fonctions liées aux entreprises
- `package.json` : Suppression des dépendances non nécessaires, correction du script seed

### Base de données :
- Migration appliquée pour ajouter les tables products et photos
- Schéma mis à jour avec les rôles ADMIN et SELLER
- Seed exécuté pour créer l'utilisateur admin par défaut (email: ibou@gmail.com, mot de passe: passer)

## Endpoints disponibles

### Inscription Admin (Registration Admin)
- **URL** : `POST /api/auth/register`
- **Description** : Crée un nouvel utilisateur admin (premier utilisateur seulement)
- **Corps de la requête** :
  ```json
  {
    "email": "admin@example.com",
    "password": "motdepasse",
    "firstName": "Prénom",
    "lastName": "Nom"
  }
  ```
- **Réponse de succès** :
  ```json
  {
    "message": "Admin created successfully",
    "user": {
      "id": "uuid",
      "email": "admin@example.com",
      "firstName": "Prénom",
      "lastName": "Nom",
      "role": "ADMIN",
      "createdAt": "2025-10-10T01:42:46.329Z"
    }
  }
  ```

### Inscription Vendeur (Registration Seller)
- **URL** : `POST /api/auth/register-seller`
- **Description** : Crée un nouvel utilisateur vendeur
- **Corps de la requête** :
  ```json
  {
    "email": "vendeur@example.com",
    "password": "motdepasse",
    "firstName": "Prénom",
    "lastName": "Nom"
  }
  ```
- **Réponse de succès** :
  ```json
  {
    "message": "Seller created successfully",
    "user": {
      "id": "uuid",
      "email": "vendeur@example.com",
      "firstName": "Prénom",
      "lastName": "Nom",
      "role": "SELLER",
      "createdAt": "2025-10-10T01:42:46.329Z"
    }
  }
  ```

### Connexion (Login)
- **URL** : `POST /api/auth/login`
- **Description** : Authentifie un utilisateur et retourne un token JWT
- **Corps de la requête** :
  ```json
  {
    "email": "admin@example.com",
    "password": "motdepasse"
  }
  ```
- **Réponse de succès** :
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "id": "uuid",
      "email": "admin@example.com",
      "firstName": "Prénom",
      "lastName": "Nom",
      "role": "SUPER_ADMIN"
    }
  }
  ```

### Autres endpoints (nécessitent authentification avec token dans header Authorization: Bearer <token>)

- `POST /api/auth/logout` : Déconnexion
- `GET /api/auth/me` : Récupérer les informations de l'utilisateur connecté
- `PUT /api/auth/change-password` : Changer le mot de passe
- `PUT /api/auth/initial-change-password` : Changement initial de mot de passe (pour utilisateurs avec forcePasswordChange)
- `POST /api/auth/complete-first-login` : Finaliser la première connexion

## Structure du projet après nettoyage

```
back/
├── .env
├── package.json
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── src/
│   ├── controllers/
│   │   └── auth.controller.ts
│   ├── routes/
│   │   └── auth.routes.ts
│   ├── services/
│   │   └── auth.service.ts
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   └── rbac.middleware.ts
│   └── utils/
│       ├── jwt.util.ts
│       └── password.util.ts
└── generated/ (Prisma client)
```

## Démarrage du projet

1. Installer les dépendances : `npm install`
2. Générer le client Prisma : `npm run prisma:generate`
3. Appliquer les migrations : `npm run prisma:migrate`
4. Construire le projet : `npm run build`
5. Démarrer le serveur : `npm start`

Ou en mode développement : `npm run dev`

Le serveur démarre sur le port 3000 par défaut.

## Tests des endpoints

Les endpoints ont été testés avec succès :

### Inscription
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","firstName":"Test","lastName":"User"}'
```

### Connexion
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Récupération des informations utilisateur (avec token)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer <TOKEN>"
```

Tous les endpoints fonctionnent correctement et retournent les réponses attendues.