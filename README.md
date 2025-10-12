# Fotoljay - Application de Gestion des Produits et Utilisateurs

Bienvenue dans Fotoljay ! Cette application full-stack vous permet de gérer des produits avec photos, des utilisateurs avec différents rôles (Admin et Vendeur), et offre une interface moderne pour l'administration et la vente.

## Démarrage Rapide

Si vous voulez juste lancer l'application rapidement, voici les étapes simples :

### 1. Prérequis
- **Node.js** version 16 ou supérieure (téléchargez sur [nodejs.org](https://nodejs.org))
- **MySQL** installé et démarré (vous pouvez utiliser XAMPP, WAMP, ou MySQL directement)

### 2. Configuration de la Base de Données
Créez une base de données MySQL nommée `fotoljay`. Si vous utilisez les paramètres par défaut :
- Utilisateur : `root`
- Mot de passe : `passer123`
- Port : `3306`

Le fichier `.env` est déjà configuré avec ces valeurs par défaut.

### 3. Installation et Lancement
```bash
# Aller dans le dossier backend
cd back

# Installer les dépendances
npm install

# Générer le client Prisma (pour la base de données)
npm run prisma:generate

# Appliquer les migrations (créer les tables)
npm run prisma:migrate

# Alimenter la base avec des données de test
npm run prisma:seed

# Lancer le serveur en mode développement
npm run dev
```

Le backend sera accessible sur `http://localhost:3000`.

### 4. Lancer le Frontend
Ouvrez un nouveau terminal et :
```bash
# Aller dans le dossier frontend
cd front

# Installer les dépendances
npm install

# Lancer l'application Angular
ng serve
```

Le frontend sera accessible sur `http://localhost:4200`.

### 5. Connexion
Utilisez ces identifiants pour vous connecter :

**Admin par défaut :**
- Email : `ibou@gmail.com`
- Mot de passe : `passer`

**Vendeurs de test :**
- `vendeur1@gmail.com` / `passer`
- `vendeur2@gmail.com` / `passer`
- Et ainsi de suite jusqu'à `vendeur5@gmail.com`

## Configuration Détaillée

Si vous voulez personnaliser la configuration :

### Variables d'Environnement
Le fichier `back/.env` contient :
```
DATABASE_URL="mysql://root:passer123@127.0.0.1:3306/fotoljay"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
PORT=3000
NODE_ENV=development
```

Modifiez `DATABASE_URL` selon vos paramètres MySQL.

### Scripts Disponibles
- `npm run dev` : Démarrage en développement (avec rechargement automatique)
- `npm run build` : Construction pour la production
- `npm start` : Démarrage en production
- `npm run prisma:studio` : Interface graphique pour voir la base de données
- `npm run prisma:migrate` : Appliquer les migrations
- `npm run prisma:seed` : Alimenter avec les données de test

## API Endpoints

L'API fournit les fonctionnalités suivantes :

### Authentification
- **POST** `/api/auth/register` - Créer un compte admin
- **POST** `/api/auth/register-seller` - Créer un compte vendeur
- **POST** `/api/auth/login` - Se connecter (admin ou vendeur)
- **POST** `/api/auth/logout` - Se déconnecter
- **GET** `/api/auth/me` - Obtenir ses informations utilisateur

### Gestion des Utilisateurs (Admin uniquement)
- **GET** `/api/users` - Lister tous les utilisateurs
- **PUT** `/api/users/:id` - Modifier un utilisateur
- **DELETE** `/api/users/:id` - Supprimer un utilisateur

### Gestion des Produits
- **GET** `/api/products` - Lister tous les produits
- **POST** `/api/products` - Créer un produit (vendeurs seulement)
- **PUT** `/api/products/:id` - Modifier son produit (vendeur propriétaire)
- **DELETE** `/api/products/:id` - Supprimer son produit (vendeur propriétaire)

### Gestion des Photos
- **POST** `/api/products/:id/photos` - Ajouter des photos à un produit
- **DELETE** `/api/products/:id/photos/:photoId` - Supprimer une photo

## Tester l'API

Vous pouvez tester les endpoints avec ces exemples curl :

### Se connecter en tant qu'admin
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ibou@gmail.com","password":"passer"}'
```

### Créer un nouveau vendeur
```bash
curl -X POST http://localhost:3000/api/auth/register-seller \
  -H "Content-Type: application/json" \
  -d '{"email":"nouveau@exemple.com","password":"motdepasse","firstName":"Jean","lastName":"Dupont","phone":"771234567","city":"Dakar"}'
```

### Lister les produits
```bash
curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer VOTRE_TOKEN_JWT"
```

## Interface Utilisateur (Frontend)

Le frontend Angular fournit une interface moderne et intuitive :

### Fonctionnalités Principales
- **Page d'accueil** : Présentation des produits disponibles
- **Connexion/Inscription** : Authentification sécurisée
- **Dashboard Admin** : Gestion des utilisateurs et produits
- **Dashboard Vendeur** : Gestion de ses propres produits
- **Upload de photos** : Ajout de photos pour les produits

### Technologies Utilisées
- **Angular 15+** : Framework moderne pour applications web
- **Tailwind CSS** : Design system utilitaire pour un style cohérent
- **TypeScript** : Typage statique pour plus de robustesse
- **Reactive Forms** : Gestion avancée des formulaires

### Navigation dans l'Application
Une fois connecté :
- **Admin** : Accès à la gestion complète des utilisateurs et produits
- **Vendeur** : Interface pour ajouter/modifier ses produits avec photos

### Gestion des Erreurs
L'interface affiche des messages clairs en cas de :
- Champs manquants ou invalides
- Erreur de connexion réseau
- Permissions insuffisantes
- Fichiers trop volumineux pour l'upload

## Architecture du Projet

```
fotoljay/
├── back/                          # Backend Node.js/Express
│   ├── prisma/
│   │   ├── schema.prisma         # Schéma de base de données
│   │   ├── seed.ts              # Données de test
│   │   └── migrations/          # Migrations DB
│   ├── src/
│   │   ├── controllers/         # Logique métier
│   │   ├── middlewares/         # Authentification, validation
│   │   ├── routes/              # Définition des routes API
│   │   ├── services/            # Services métier
│   │   └── utils/               # Utilitaires (JWT, password)
│   ├── uploads/                 # Images des produits
│   └── .env                     # Configuration
├── front/                        # Frontend Angular
│   ├── src/app/
│   │   ├── pages/               # Pages (login, dashboard, etc.)
│   │   ├── services/            # Services API
│   │   └── models/              # Interfaces TypeScript
│   └── ...
└── README.md
```

## Base de Données

Le système utilise **MySQL** avec **Prisma ORM** :

### Modèles Principaux
- **User** : Utilisateurs (Admin/Vendeur) avec authentification
- **Product** : Produits avec prix, description, vendeur
- **Photo** : Images des produits (principales/secondaires)

### Données de Test Incluses
Après le seeding, vous aurez :
- 1 administrateur (`ibou@gmail.com` / `passer`)
- 5 vendeurs avec des produits variés
- Plus de 10 produits avec photos

## Technologies

### Backend
- **Express.js** + **TypeScript** : API robuste et typée
- **Prisma** : ORM moderne pour MySQL
- **JWT** : Authentification sécurisée
- **bcrypt** : Hachage des mots de passe
- **Multer** : Upload de fichiers

### Frontend
- **Angular 15+** : Framework SPA moderne
- **Tailwind CSS** : Styling utilitaire
- **RxJS** : Programmation réactive

### Sécurité
- Authentification JWT
- Hachage des mots de passe
- Validation des données
- Gestion des rôles (RBAC)

## Déploiement

Pour déployer en production :
1. Modifier les variables d'environnement pour la production
2. Construire le backend : `npm run build`
3. Configurer un serveur web (nginx, Apache)
4. Déployer le frontend : `ng build --prod`

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :
1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Testez vos changements
4. Soumettez une pull request

## Licence

Ce projet est sous licence ISC. Vous êtes libre de l'utiliser et le modifier selon vos besoins.

---

**Prêt à commencer ?** Suivez le guide de démarrage rapide ci-dessus et lancez-vous dans le développement ! Si vous avez des questions, n'hésitez pas à explorer le code source.
