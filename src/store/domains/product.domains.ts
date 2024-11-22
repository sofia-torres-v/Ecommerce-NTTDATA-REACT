export interface ProductResponse {
  category: string;
  discountPercentage: number;
  price: number;
  thumbnail: string;
  title: string;
}

// Interfaz para el contexto de productos
export interface ProductContextType {
  products: ProductResponse[];  // Lista de productos
  fetchProducts: () => void;    // Cargar productos
}
