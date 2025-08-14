# HAC TECH Construction Website

Site web professionnel pour HAC TECH Construction (HIRAM ABIFF CONSTRUCTION AND TECHNOLOGY), spécialisée dans la construction, rénovation et solutions technologiques au Cameroun.

## 🚀 Fonctionnalités

- **Design Responsive** : Optimisé pour mobile, tablette et desktop
- **SEO Optimisé** : Métadonnées complètes et structure sémantique
- **Galerie Interactive** : Portfolio filtrable par catégorie de projets
- **Formulaire de Contact** : Avec envoi d'emails automatisé
- **Google Maps** : Localisation interactive de l'entreprise
- **Témoignages** : Carrousel automatique des avis clients
- **Performance** : Chargement rapide et animations fluides

## 🛠️ Technologies

- **Frontend** : React 18 + TypeScript + Tailwind CSS
- **Icons** : Lucide React
- **Email** : EmailJS (client-side) + Nodemailer (server-side)
- **Maps** : Google Maps Embed
- **Build** : Vite
- **Deployment** : Optimisé pour Netlify/Vercel

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd hac-tech-website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
```bash
cp .env.example .env
```

Remplir les variables dans `.env` :
- EmailJS credentials pour l'envoi d'emails client-side
- Configuration SMTP pour le serveur email (optionnel)
- Clé API Google Maps (optionnel pour fonctionnalités avancées)

## 🚀 Démarrage

### Mode développement (frontend uniquement)
```bash
npm run dev
```

### Mode développement complet (frontend + serveur email)
```bash
npm run dev:full
```

### Serveur email uniquement
```bash
npm run email-server
```

## 📧 Configuration Email

### Option 1 : EmailJS (Recommandé - Client-side)

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email
4. Récupérer les IDs et les ajouter dans `.env`

### Option 2 : Serveur Node.js (Server-side)

1. Configurer un compte email avec mot de passe d'application
2. Remplir `EMAIL_USER` et `EMAIL_PASS` dans `.env`
3. Démarrer le serveur avec `npm run email-server`

## 🗺️ Google Maps

La carte utilise l'API Google Maps Embed (gratuite, sans clé API requise pour l'usage basique).

Pour des fonctionnalités avancées :
1. Obtenir une clé API Google Maps
2. L'ajouter dans `REACT_APP_GOOGLE_MAPS_API_KEY`

## 📱 Sections du Site

1. **Accueil** : Hero section avec call-to-action
2. **À Propos** : Histoire, équipe, valeurs, certifications
3. **Services** : Liste détaillée des prestations
4. **Réalisations** : Portfolio filtrable par catégorie
5. **Témoignages** : Avis clients avec carrousel
6. **Contact** : Formulaire + carte + informations

## 🎨 Personnalisation

### Couleurs (Tailwind CSS)
- Primaire : `blue-900` (#1E3A8A)
- Accent : `yellow-400` (#FBBF24)
- Neutre : Gamme de gris

### Contenu
- Modifier les données dans `src/data/`
- Ajuster les textes dans les composants
- Remplacer les images par vos propres visuels

### Styling
- Classes Tailwind dans les composants
- Système d'espacement cohérent (8px)
- Animations et transitions fluides

## 📊 SEO & Performance

- **Métadonnées** : Title, description, Open Graph, Twitter Cards
- **Schema.org** : Données structurées pour les entreprises locales
- **Images** : Optimisées et avec attributs alt
- **Performance** : Code splitting et lazy loading
- **Accessibilité** : Contrastes et navigation clavier

## 🚀 Déploiement

### Netlify (Recommandé)
```bash
npm run build
# Déployer le dossier dist/
```

### Vercel
```bash
npm run build
# Connecter le repository GitHub
```

### Variables d'environnement de production
Configurer les mêmes variables que `.env` dans votre plateforme de déploiement.

## 📞 Support

Pour toute question technique ou personnalisation :
- Email : contact@hactech.cm
- Téléphone : +237 699 XX XX XX

## 📄 Licence

© 2024 HAC TECH Construction. Tous droits réservés.