import { createContext, useEffect, ReactNode, useState } from "react";
import { ProductResponse } from "../domains/product.domains";
import { fetchProducts } from "../../services/productService";
import { mapperProducts } from "../mappers/productMapper";

interface ProductContextType {
  productsData: ProductResponse[];
  fetchProducts: () => void;
}

// valor para evitar null
export const ProductContext = createContext<ProductContextType>({
  productsData: [],
  fetchProducts: () => {},
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [productsData, setProductsData] = useState<ProductResponse[]>([]);

  const fetchAndMapProducts = async () => {
    try {
      const data = await fetchProducts();
      const mappedProducts = mapperProducts(data);
      setProductsData(mappedProducts);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  useEffect(() => {
    fetchAndMapProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productsData, fetchProducts: fetchAndMapProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
