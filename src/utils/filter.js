import {renderAllData} from "../dom/product";
import {showMessage} from "../dom/message";

// Filtrar productos por categoría
export function selectProduct(products, selectedCategory, container) {
    const filteredProducts =
        selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    if (filteredProducts.length === 0) {
        showMessage(container, "No se encontraron productos en esta categoría.");
    }

    return filteredProducts;
}

// Filtrar productos por término de búsqueda
export function searchProduct(products, searchTerm, container) {
    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    container.innerHTML = "";

    if (searchedProducts.length === 0) {
        showMessage(container, "No se encontraron productos con ese término de búsqueda.");
    }

    renderAllData(searchedProducts, container);
}
