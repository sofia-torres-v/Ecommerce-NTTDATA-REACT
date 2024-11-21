import { Product } from "../types/product";
import { mapperProducts, mapperCategories } from "./mappers"; 

// Obtener todos los productos
export async function fetchData(): Promise<Product[]> {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const dataProducts = await response.json();
        return mapperProducts(dataProducts.products);

    } catch (error) {
        console.error("Error al cargar toda la data:", error);
        return [];
    }
}

// Obtener todas las categorias
export async function fetchCategories(): Promise<string[]> {
    try {
        const response = await fetch("https://dummyjson.com/products/categories");
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const categoryProducts = await response.json();
        return mapperCategories(categoryProducts);
        
    } catch (error) {
        console.error("Error al cargar las categorías:", error);
        return [];
    }
}
