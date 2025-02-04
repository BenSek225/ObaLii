# 🍽️ Ôba-lii - Application Mobile de Commande de Repas

Ôba-lii est une **application mobile** moderne conçue pour simplifier la commande de plats locaux auprès de restaurants et de traiteurs partenaires. Son objectif est d'offrir une **expérience utilisateur fluide**, intuitive et sécurisée pour tous.

---

## 🎯 Objectif de l'Application

- ✅ **Simplifier la commande de repas** : Choisissez vos plats préférés et commandez en quelques clics.  
- ✅ **Optimiser l’expérience utilisateur** : Interface intuitive adaptée à tous les profils d'utilisateurs.  
- ✅ **Faciliter la gestion des commandes** : Suivi en temps réel des commandes de la préparation à la livraison.  
- ✅ **Navigation rapide et ergonomique** : Architecture pensée pour une navigation fluide.  
- ✅ **Sécurité renforcée** : Authentification et paiements sécurisés via Firebase et des APIs de paiement.

---

## 🎨 Palette de Couleurs de l'Application

| Couleur  | Code Hexadécimal | Usage                          |
|:---------|:-----------------|:-------------------------------|
| 🌿 Vert  | `#4CAF50`        | Boutons de validation, succès |
| 🍽 Orange| `#FF9800`        | Promotions, éléments dynamiques |
| ⚪ Blanc | `#FFFFFF`        | Arrière-plan pour clarté      |
| ⚫ Noir/Gris foncé | `#333333` | Textes importants            |
| 💙 Bleu  | `#007BFF`        | Actions principales (boutons) |

---

## 🏗️ Technologies Utilisées

### 🎯 **Frontend (Interface Utilisateur)**
- **React Native (TypeScript)** : Développement multi-plateforme (iOS & Android).
- **NativeWind** : Stylisation rapide inspirée de Tailwind CSS.
- **React Navigation** : Gestion des navigations (Stack & Tabs).

### 🗄️ **Backend (Gestion des Données)**
- **Firebase Authentication** : Authentification sécurisée des utilisateurs.
- **Firestore Database** : Base de données NoSQL pour la gestion des utilisateurs, commandes, menus.
- **Cloud Functions** : Automatisation des tâches backend (paiements, notifications).

### 📡 **APIs & Services**
- **API de Paiement Sécurisé** (ex : Stripe, PayPal) : Transactions fiables et sécurisées.
- **Google Maps API** : Suivi de la livraison en temps réel.

---

## 🚀 Fonctionnalités Clés

### 🔑 **1. Authentification**
- Création de compte et connexion sécurisée avec Firebase Authentication.
- Réinitialisation de mot de passe par email.
- Gestion des profils utilisateurs (modification des informations personnelles).

### 🍛 **2. Exploration des Menus**
- Parcours des menus avec des suggestions personnalisées.
- Recherche de plats par catégories, popularité ou prix.
- Détails des plats : ingrédients, images, prix.

### 🛒 **3. Gestion des Commandes**
- Ajout de plats au panier, modification des quantités.
- Passage de commandes avec estimation du temps de livraison.
- Suivi des commandes en temps réel (préparation, livraison, finalisation).

### 🚚 **4. Suivi de Livraison**
- Statut des commandes mis à jour en direct.
- Localisation du livreur via Google Maps.
- Notifications push pour les mises à jour importantes.

### 💳 **5. Paiement Sécurisé**
- Paiement en ligne via cartes bancaires ou portefeuilles électroniques.
- Historique des paiements consultable depuis l'application.

### 🎁 **6. Promotions et Fidélité**
- Gestion des offres spéciales et réductions.
- Programme de fidélité pour récompenser les clients réguliers.

---

## 📂 Architecture du Projet

```plaintext
Ôba-lii/
├── src/
│   ├── assets/            # Images, icônes et polices
│   ├── components/        # Composants réutilisables
│   ├── navigation/        # Gestion des routes (Stack & Tabs)
│   ├── redux/             # Gestion d'état avec Redux Toolkit
│   ├── screens/           # Écrans de l'application
│   ├── services/          # Services API (Firebase, paiements)
│   ├── styles/            # Fichiers de styles globaux
│   ├── utils/             # Fonctions utilitaires
│   └── App.tsx            # Point d'entrée principal
├── package.json           # Dépendances et scripts du projet
├── README.md              # Documentation du projet
└── .gitignore             # Fichiers ignorés par Git
```
---

## 🚀 Pourquoi choisir Ôba-lii ?
-🔹 **Expérience utilisateur fluide** → Interface moderne et intuitive, optimisée pour mobile.
- 🔹 **Commande rapide et sécurisée** → Paiement en ligne et suivi en temps réel des commandes.
- 🔹 **Navigation optimisée** → Accès facile aux menus, aux promotions et aux commandes en cours.
- 🔹 **Technologies modernes** → Utilisation de Firebase, React Native et Redux Toolkit pour une performance optimale.
- 🔹 **Solution adaptée aux besoins locaux** → Ciblant les utilisateurs cherchant à commander des plats traditionnels facilement.

---

## ⚙️ Instructions d'Installation

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/oba-lii.git
cd oba-lii
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Lancer l'application
```bash
# Pour Android
npm run android
# Pour iOS
npm run ios
```

### 4️⃣ Configurer Firebase
- Ajoutez votre fichier google-services.json (Android) ou GoogleService-Info.plist (iOS) dans le dossier approprié.
- Configurez vos variables d'environnement pour l’authentification et les APIs.

---

## 📬 Contact
Pour toute question ou suggestion :

Email : sekongobienvenu22@gmail.com
GitHub : https://github.com/BenSek225

