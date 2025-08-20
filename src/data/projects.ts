import { Project } from '../types';
const images = import.meta.glob("../SITE/*.{jpg,png,jpeg}", { eager: true });

export const projects: Project[] = [
  // MAISONS
  {
    id: 1,
    title: "Villa Moderne Yaoundé",
    category: "maisons",
    image: "public/IMG-20250704-WA0010.jpg?auto=compress&cs=tinysrgb&w=800",
    description: "Construction d'une villa contemporaine de 200m² avec piscine et jardin paysager",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 2,
    title: "Résidence Familiale Douala",
    category: "maisons",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Maison familiale à étage avec terrasse panoramique et garage double",
    year: 2023,
    status: "completed",
    location: "Douala"
  },

  // COMMERCIAL
  {
    id: 3,
    title: "Centre Commercial Bonanjo",
    category: "commercial",
    image: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Construction d'un centre commercial de 3000m² avec parking souterrain",
    year: 2023,
    status: "completed",
    location: "Douala"
  },
  {
    id: 4,
    title: "Bureaux Corporate Akwa",
    category: "commercial",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Aménagement de bureaux corporate avec espaces collaboratifs modernes",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },

  // RÉNOVATION
  {
    id: 5,
    title: "Rénovation Appartement Bastos",
    category: "renovation",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rénovation complète d'un appartement de 120m² avec cuisine moderne",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 6,
    title: "Restauration Maison Coloniale",
    category: "renovation",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Restauration d'une maison coloniale en préservant son cachet authentique",
    year: 2024,
    status: "in-progress",
    location: "Yaoundé"
  },

  // MEUBLEMENT
  {
    id: 7,
    title: "Mobilier Bureau Moderne",
    category: "meublement",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Conception et fabrication de mobilier de bureau sur mesure en bois massif",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 8,
    title: "Cuisine Équipée Haut de Gamme",
    category: "meublement",
    image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation complète d'une cuisine moderne avec îlot central et électroménager intégré",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },

  // DÉCORATION INTERNE
  {
    id: 9,
    title: "Aménagement Intérieur Villa",
    category: "decoration-interne",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Décoration complète d'une villa avec mobilier design et éclairage intelligent",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 10,
    title: "Design Intérieur Restaurant",
    category: "decoration-interne",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Aménagement intérieur d'un restaurant avec ambiance moderne et chaleureuse",
    year: 2023,
    status: "completed",
    location: "Douala"
  },

  // RÉNOVATION EXTERNE
  {
    id: 11,
    title: "Façade Immeuble Moderne",
    category: "renovation-externe",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rénovation complète de façade avec isolation thermique et nouveau revêtement",
    year: 2024,
    status: "in-progress",
    location: "Yaoundé"
  },
  {
    id: 12,
    title: "Aménagement Extérieur Villa",
    category: "renovation-externe",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Création de terrasses, allées pavées et aménagement paysager complet",
    year: 2023,
    status: "completed",
    location: "Douala"
  },

  // GROS ŒUVRE
  {
    id: 13,
    title: "Structure Béton Armé",
    category: "gros-oeuvre",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Construction de structure en béton armé pour immeuble de 5 étages",
    year: 2024,
    status: "in-progress",
    location: "Yaoundé"
  },
  {
    id: 14,
    title: "Fondations Spéciales",
    category: "gros-oeuvre",
    image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Réalisation de fondations profondes pour terrain difficile",
    year: 2023,
    status: "completed",
    location: "Douala"
  },

  // ÉLECTRIQUE
  {
    id: 15,
    title: "Installation Électrique Industrielle",
    category: "electrique",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation électrique complète d'une usine avec tableau haute tension",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },
  {
    id: 16,
    title: "Éclairage Public LED",
    category: "electrique",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation d'éclairage public LED avec panneaux solaires",
    year: 2023,
    status: "completed",
    location: "Yaoundé"
  },

  // INFORMATIQUE
  {
    id: 17,
    title: "Réseau Informatique Entreprise",
    category: "informatique",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation complète de réseau informatique et serveurs pour entreprise",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 18,
    title: "Système de Sécurité Numérique",
    category: "informatique",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation de système de surveillance et contrôle d'accès intelligent",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },

  // SYSTÈME INTELLIGENT
  {
    id: 19,
    title: "Maison Connectée",
    category: "system-intelligent",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Installation complète de domotique avec contrôle intelligent de tous les équipements",
    year: 2024,
    status: "completed",
    location: "Yaoundé"
  },
  {
    id: 20,
    title: "Bâtiment Intelligent",
    category: "system-intelligent",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Automatisation complète d'un bâtiment commercial avec IA et IoT",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },

  // MAINTENANCE
  {
    id: 21,
    title: "Maintenance Industrielle",
    category: "maintenance",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Maintenance préventive et curative d'équipements industriels lourds",
    year: 2024,
    status: "in-progress",
    location: "Douala"
  },
  {
    id: 22,
    title: "Entretien Bâtiments Publics",
    category: "maintenance",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Contrat de maintenance pour l'entretien de bâtiments administratifs",
    year: 2023,
    status: "completed",
    location: "Yaoundé"
  }
];
