export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    imageUrl?: string;
    features: string[];
    available: boolean;
    createdAt: string;
    updatedAt: string;
    ownerId: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: 'RENTER' | 'OWNER' | 'ADMIN';
    favoriteProperties: string[];
    createdAt: string;
  }