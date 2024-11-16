import {renderAllData} from "./dom.js";

// Filtrar productos en el input select
export function selectProduct(products, selectedCategory, container) {
    const filteredProducts =
        selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    container.innerHTML = "";
    renderAllData(filteredProducts, container);
}

// Filtrar productos en el input buscador
export function searchProduct(products, searchTerm, container) {
    const searchedProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    container.innerHTML = "";
    renderAllData(searchedProduct, container);
}
