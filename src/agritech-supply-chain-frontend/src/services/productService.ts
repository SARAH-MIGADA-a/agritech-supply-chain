import api from './api';
import { Product } from '../interfaces/Product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products'); // Adjust endpoint as necessary
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`); // Adjust endpoint as necessary
  return response.data;
};
