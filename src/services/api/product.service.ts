export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const data = await response.json();
        return data.products; 
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return []; 
    }
}

export async function fetchCategories(){
    try {
        const response = await fetch("https://dummyjson.com/products/categories");
        if (!response.ok) {
            throw new Error("No se pudo obtener la data de la Api");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las categorias:", error);
        return [];
    }
}
