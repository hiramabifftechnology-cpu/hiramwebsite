import { Service } from '../types';

export const services: Service[] = [
  // CONSTRUCTION
  {
    id: 1,
    title: "Construction Neuve & Bâtiments",
    description: "Construction de maisons individuelles, villas, bâtiments résidentiels et commerciaux avec des matériaux de qualité supérieure et respect des normes internationales.",
    icon: "Building",
    images: [
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "construction"
  },
  {
    id: 2,
    title: "Architecture & Urbanisme Durable",
    description: "Conception architecturale contemporaine, planification urbaine durable, éco-quartiers et développement de smart cities pour l'Afrique de demain.",
    icon: "PenTool",
    images: [
      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "architecture"
  },
  {
    id: 3,
    title: "Construction Maritime & Fluviale",
    description: "Projets de grande envergure pour infrastructures portuaires, ponts, barrages et aménagements hydrauliques avec expertise en génie civil maritime.",
    icon: "Waves",
    images: [
      "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "construction"
  },
  {
    id: 4,
    title: "Infrastructures Lourdes",
    description: "Construction d'infrastructures publiques et privées : routes, ponts, tunnels, aéroports, avec respect strict des normes nationales et internationales.",
    icon: "Layers",
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "infrastructure"
  },

  // HYDRAULIQUE
  {
    id: 5,
    title: "Hydraulique & Gestion de l'Eau",
    description: "Optimisation de l'eau pour l'agriculture et l'industrie, systèmes d'irrigation, traitement des eaux et lutte contre les inondations.",
    icon: "Droplets",
    images: [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "hydraulique"
  },

  // RÉNOVATION
  {
    id: 6,
    title: "Rénovation & Réhabilitation",
    description: "Rénovations légères et lourdes, réhabilitation de bâtiments historiques, restauration architecturale et entretien industriel des structures.",
    icon: "Hammer",
    images: [
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "renovation"
  },

  // TECHNOLOGIE & INTELLIGENCE
  {
    id: 7,
    title: "Robotisation & Construction 4.0",
    description: "Intégration de la robotique dans la construction, systèmes intelligents, modules automatisés et technologies de construction avancées.",
    icon: "Bot",
    images: [
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "technologie"
  },
  {
    id: 8,
    title: "Domotique & Systèmes Intelligents",
    description: "Installation de systèmes domotiques, maisons connectées, automatisation résidentielle et commerciale pour un habitat intelligent.",
    icon: "Home",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "technologie"
  },

  // RÉSEAUX & TÉLÉCOMMUNICATIONS
  {
    id: 9,
    title: "Réseaux de Sécurité & Électriques",
    description: "Installation de réseaux électriques, systèmes de sécurité avancés, surveillance électronique et protection des infrastructures.",
    icon: "Shield",
    images: [
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "reseaux"
  },
  {
    id: 10,
    title: "Fibre Optique & FTTH",
    description: "Installation de réseaux fibre optique, FTTH (Fiber To The Home), antennes de communication et infrastructures de télécommunications modernes.",
    icon: "Wifi",
    images: [
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "reseaux"
  },

  // ÉNERGIE RENOUVELABLE
  {
    id: 11,
    title: "Énergie Renouvelable & Solaire",
    description: "Installation de champs solaires, panneaux photovoltaïques, éoliennes et solutions d'énergie verte pour un développement durable.",
    icon: "Sun",
    images: [
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "energie"
  },

  // MOBILIER & MENUISERIE
  {
    id: 12,
    title: "Mobilier & Menuiserie",
    description: "Fabrication de meubles sur mesure, portes de sécurité métalliques et en bois, cuisines équipées et aménagements intérieurs personnalisés.",
    icon: "Wrench",
    images: [
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "mobilier"
  },

  // CONSTRUCTION MÉTALLIQUE
  {
    id: 13,
    title: "Construction Métallique",
    description: "Structures métalliques, charpentes industrielles, hangars, ateliers et bâtiments préfabriqués avec expertise en soudure et assemblage.",
    icon: "Wrench",
    images: [
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "construction"
  },

  // ENTRETIEN & HYGIÈNE
  {
    id: 14,
    title: "Entretien & Services d'Hygiène",
    description: "Maintenance préventive et curative, nettoyage industriel, services d'hygiène pour bâtiments et espaces publics.",
    icon: "Sparkles",
    images: [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "maintenance"
  },

  // CONSULTING
  {
    id: 15,
    title: "Consulting & Services Premium",
    description: "Conseil en ingénierie, expertise technique, design architectural, études de faisabilité et accompagnement de projets complexes.",
    icon: "Users",
    images: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "consulting"
  }
];