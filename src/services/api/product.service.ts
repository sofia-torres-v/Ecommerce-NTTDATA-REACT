import { API_ENDPOINTS } from "./api.config";

export async function fetchProducts() {
    try {
        const response = await fetch(API_ENDPOINTS.products);
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const data = await response.json();
        return data.products; 
    } catch (error) {
        console.error("Error al obtener productos:", error);
      
    }
}

export async function fetchCategories(){
    try {
        const response = await fetch(API_ENDPOINTS.categories);
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las categorias:", error);
        
    }
}