// src/interfaces/index.ts

export interface Product {
    id: string;
    name: string;
    farmerId: string;
    quantity: number;
    price: number;
    productionDate: Date;
    location: string;
    fertilizers: string[];
    certifications: string[];
    status: 'LISTED' | 'SOLD' | 'IN_TRANSIT' | 'DELIVERED';
  }
  
  export interface Farmer {
    id: string;
    name: string;
    location: string;
    products: string[];
    rating: number;
  }
  
  export interface Buyer {
    id: string;
    name: string;
    purchaseHistory: string[];
  }
  
  export interface Transaction {
    id: string;
    productId: string;
    farmerId: string;
    buyerId: string;
    quantity: number;
    price: number;
    date: Date;
    status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  }
  
  export interface TrackingInfo {
    transactionId: string;
    status: string;
    location: string;
    timestamp: Date;
    temperature?: number;
    humidity?: number;
  }