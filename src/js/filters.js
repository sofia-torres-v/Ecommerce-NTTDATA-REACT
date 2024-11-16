import { renderAllData } from "./dom.js";

// Filtrar productos por categoría
export function selectProduct(products, selectedCategory) {
    return selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);
}

// Filtrar productos por término de búsqueda
export function searchProduct(products, searchTerm, container) {
    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    container.innerHTML = "";
    renderAllData(searchedProducts, container); 
}