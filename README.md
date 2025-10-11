
# Projet Backend d'Authentification et Gestion des Produits

Ce projet est un backend développé avec Express.js, TypeScript et Prisma. Il fournit des endpoints pour l'authentification (inscription et connexion pour admins et vendeurs), la gestion des utilisateurs et des produits avec photos. Le système supporte deux rôles : ADMIN et SELLER, où les vendeurs peuvent gérer leurs produits.

## Prérequis

- Node.js (version 16 ou supérieure)
- MySQL (ou un autre SGBD supporté par Prisma)
- npm ou yarn

## Configuration

1. Créer un fichier `.env` dans le dossier `back/` avec les variables suivantes :
   ```
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   JWT_SECRET="votre_secret_jwt"
   PORT=3000
   ```

   - `DATABASE_URL` : URL de connexion à la base de données MySQL
   - `JWT_SECRET` : Clé secrète pour signer les tokens JWT
   - `PORT` : Port sur lequel le serveur écoute (optionnel, défaut 3000)

## Installation

Aller dans le dossier back :
```bash
cd back
```

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Générer le client Prisma :
   ```bash
   npm run prisma:generate
   ```

3. Appliquer les migrations de base de données :
   ```bash
   npm run prisma:migrate
   ```

4. Alimenter la base de données avec des données initiales :
   ```bash
   npm run prisma:seed
   ```

5. Construire le projet :
   ```bash
   npm run build
   ```

6. Démarrer le serveur :
   ```bash
   npm start
   ```

Ou en mode développement :
```bash
npm run dev
```

Le serveur démarre sur le port 3000 par défaut.

## Endpoints API

### Inscription Admin
- **POST** `/api/auth/register`
- Crée un nouvel utilisateur admin (premier utilisateur seulement)

### Inscription Vendeur
- **POST** `/api/auth/register-seller`
- Crée un nouvel utilisateur vendeur

### Connexion
- **POST** `/api/auth/login`
- Authentifie un utilisateur (admin ou vendeur) et retourne un token JWT

### Autres endpoints (nécessitent authentification)
- **POST** `/api/auth/logout` : Déconnexion
- **GET** `/api/auth/me` : Récupérer les informations de l'utilisateur connecté
- **PUT** `/api/auth/change-password` : Changer le mot de passe
- **PUT** `/api/auth/initial-change-password` : Changement initial de mot de passe
- **POST** `/api/auth/complete-first-login` : Finaliser la première connexion

Tous les endpoints nécessitant authentification doivent inclure le header `Authorization: Bearer <token>`.

## Tests des endpoints

Exemples avec curl :

### Inscription Admin
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"test123","firstName":"Admin","lastName":"User"}'
```

### Inscription Vendeur
```bash
curl -X POST http://localhost:3000/api/auth/register-seller \
  -H "Content-Type: application/json" \
  -d '{"email":"vendeur@example.com","password":"test123","firstName":"Vendeur","lastName":"User"}'
```

### Connexion
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Récupération des informations utilisateur
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer <TOKEN>"
```

## Intégration frontend

Le frontend Angular utilise les services pour communiquer avec l'API backend. Les composants de connexion et d'inscription sont configurés pour utiliser les endpoints suivants :

### Technologies frontend

- **Angular** : Framework pour le développement web
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **Reactive Forms** : Gestion des formulaires avec validation
- **HttpClient** : Appels HTTP vers l'API backend

### Composants créés

- **LoginComponent** : Formulaire de connexion avec validation en temps réel
- **RegisterComponent** : Formulaire d'inscription avec tous les champs requis
- **UserService** : Service Angular pour les appels HTTP à l'API
- **User Model** : Interface TypeScript pour les utilisateurs

### Endpoints utilisés

- `POST /api/auth/register` : Inscription d'un nouvel utilisateur
- `POST /api/auth/login` : Connexion et récupération du token JWT
- `GET /api/auth/me` : Récupération des informations de l'utilisateur connecté
- `PUT /api/auth/change-password` : Changement de mot de passe
- `POST /api/auth/logout` : Déconnexion

### Gestion des erreurs

Les composants affichent des messages d'erreur détaillés pour :
- Champs obligatoires non remplis
- Format d'email invalide
- Mot de passe trop court
- Erreurs de l'API (email déjà utilisé, identifiants incorrects)

### Stockage du token

Le token JWT est automatiquement stocké dans le localStorage après connexion et utilisé pour les requêtes authentifiées.

## Structure du projet

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
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   └── rbac.middleware.ts
│   ├── routes/
│   │   └── auth.routes.ts
│   ├── services/
│   │   └── auth.service.ts
│   └── utils/
│       ├── jwt.util.ts
│       └── password.util.ts
└── generated/ (client Prisma généré)
```

## Schéma de base de données

Le projet utilise Prisma avec MySQL. Les modèles principaux sont :

- **User** : Utilisateurs avec rôles ADMIN ou SELLER
- **Product** : Produits liés à un vendeur, avec prix et description
- **Photo** : Photos des produits, classées en MAIN (3 max) et SECONDARY (3 max), avec ordre

Un utilisateur admin est créé par défaut lors du seed :
- Email : ibou@gmail.com
- Mot de passe : passer

## Technologies utilisées

- **Express.js** : Framework web pour Node.js
- **TypeScript** : Superset JavaScript avec typage statique
- **Prisma** : ORM pour la base de données
- **MySQL** : Système de gestion de base de données
- **JWT** : Authentification basée sur tokens
- **bcrypt** : Hachage des mots de passe
- **Helmet** : Sécurité des headers HTTP
- **CORS** : Gestion des requêtes cross-origin

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -am 'Ajouter une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## Frontend

Le projet inclut également un frontend Angular pour l'interface utilisateur. Pour créer le projet frontend :

```bash
# Installer Angular CLI (version compatible)
npm install -g @angular/cli@15

# Créer le projet dans le dossier front/
cd front
ng new expat-clone --routing --style=scss
cd expat-clone

# Créer la structure des dossiers
mkdir src/app/components
mkdir src/app/pages
mkdir src/app/services
mkdir src/app/models
mkdir src/app/utils
mkdir src/assets/data

# Générer les composants
ng generate component components/header
ng generate component components/footer
ng generate component pages/home
ng generate component pages/product-detail
ng generate component pages/login
ng generate component pages/register
ng generate component pages/dashboard-vendeur
ng generate component pages/add-product
ng generate component pages/dashboard-admin
ng generate component pages/vip-credits

# Générer les services
ng generate service services/user
ng generate service services/product
ng generate service services/admin
ng generate service services/credit

# Créer les modèles et utilitaires
touch src/app/models/user.model.ts
touch src/app/models/product.model.ts
touch src/app/models/category.model.ts
touch src/app/models/credit.model.ts
touch src/app/utils/local-storage.helper.ts
touch src/app/utils/constants.ts
touch src/assets/data/users.json
touch src/assets/data/products.json
touch src/assets/data/categories.json

# Installer les dépendances
npm install

# Installer Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Démarrer le serveur de développement
ng serve
```

L'application Angular sera accessible sur `http://localhost:4200` par défaut.

Le frontend se connecte au backend via les endpoints API documentés ci-dessus.

## Licence

Ce projet est sous licence ISC.
