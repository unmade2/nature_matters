export type Language = 'en' | 'zh';

export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface TripHighlight {
  id: string;
  text: string;
}

export interface IncludedItem {
  id: string;
  text: string;
}

export interface ExcludedItem {
  id: string;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  image?: string;
}

export interface WeatherSeason {
  title: string;
  data: {
    city: string;
    temp: string;
    desc: string;
  }[];
}

export interface CompanyInfo {
  name: string;
  license: string;
  registration: string;
  established: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  whatsapp: string;
  email: string;
}
