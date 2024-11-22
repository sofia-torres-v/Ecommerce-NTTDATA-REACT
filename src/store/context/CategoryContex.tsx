import { createContext, useEffect, ReactNode, useState } from "react";
import { fetchCategories } from "../../services/productService";
import { mapperCategories } from "../../store/mappers/productMapper";

interface CategoryContextType {
  categories: string[];
  fetchCategories: () => void;
}

export const CategoryContext = createContext<CategoryContextType >({
  categories: [],
  fetchCategories: () => {},
});

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] =  useState<string[]>([]);

  const fetchAndMapCategories = async () => {
    try {
      const data = await fetchCategories();
       const mappedCategories = mapperCategories(data);
       console.log(mappedCategories)
      setCategories(mappedCategories);
    } catch (error) {
      console.error("Error al cargar las categorias:", error);
    }
  };

  useEffect(() => {
    fetchAndMapCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories: fetchAndMapCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
