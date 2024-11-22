import { createContext, useEffect, ReactNode, useState } from "react";
import { ProductContextType } from "../domains/product.domains";  
import { fetchProducts } from "../../services/productService";
import { mapperProducts } from "../mappers/productMapper";

// Crear contexto siguiendo la interfaz definida
export const ProductContext = createContext<ProductContextType>({
  products: [],
  fetchProducts: () => {},
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductContextType["products"]>([]);

  const fetchAndMapProducts = async () => {
    try {
      const data = await fetchProducts();
      const mappedProducts = mapperProducts(data);
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  useEffect(() => {
    fetchAndMapProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProducts: fetchAndMapProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
