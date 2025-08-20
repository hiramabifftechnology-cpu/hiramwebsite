export interface Project {
  id: number;
  title: string;
  category: 'maisons' | 'commercial' | 'renovation' | 'meublement' | 'decoration-interne' | 'renovation-externe' | 'gros-oeuvre' | 'electrique' | 'informatique' | 'system-intelligent' | 'maintenance';
  image: string;
  description: string;
  year: number;
  status: 'completed' | 'in-progress';
  location?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  images: string[];
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}