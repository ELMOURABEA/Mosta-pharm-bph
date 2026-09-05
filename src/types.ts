export interface Branch {
  id: string;
  name: string;
  nameAr: string;
  city: string;
  cityAr: string;
  area: string;
  areaAr: string;
  address: string;
  addressAr: string;
  phone: string;
  phones?: string[];
  whatsapp: string;
  hours: string;
  is24Hours: boolean;
  status: 'active' | 'seasonal' | 'soon';
  features: string[];
  mapQuery: string;
  googleMapUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  badge?: string;
  gradient: string;
  details: string[];
}

export interface PharmacyProduct {
  id: string;
  name: string;
  nameAr: string;
  category: 'medications' | 'dermacosmetics' | 'devices' | 'baby' | 'vitamins';
  price: number;
  originalPrice?: number;
  description: string;
  brand: string;
  inStock: boolean;
  prescriptionRequired: boolean;
  rating: number;
  tags: string[];
}

export interface InsurancePartner {
  id: string;
  name: string;
  category: string;
  coverageType: string;
  approvalSpeed: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  comment: string;
  commentAr: string;
  date: string;
}

export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category: string;
}
