export interface Project {
  id: number;
  title: string;
  category: 'maisons' | 'commercial' | 'renovation';
  image: string;
  description: string;
  year: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
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