export interface House {
  id: string;
  model: string;
  tagline: string;
  specs: string;
  price: string;
  image: string;
  features: string[];
}

export interface Amenity {
  icon: string;
  title: string;
  desc: string;
}

export interface TrustPoint {
  id: number;
  text: string;
}