import { renderAllData } from "../dom/product.js";
import { showMessage } from "../dom/message.js";


// Filtrar productos por categoría 

export function selectProduct(products, selectedCategory, container, imageUrl) {
    container.innerHTML = "";
    // no palabras magicas estos valores escritos manualmente deben estar en enum para evitar errores
    // usemos un if cl'asico los ternarios son para condicionales simples usarlos para validaciones que tienen dentro cada evaluaci'on l'ogica compleja se vuelve tedioso de leer
    const filteredProducts =
        selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    if (filteredProducts.length === 0) {
        showMessage(container, "No encontramos productos en esta categoría", imageUrl);
    }
    return filteredProducts;
}


// Filtrar productos por término de búsqueda 

export function searchProduct(products, searchTerm, container, imageUrl) {
    container.innerHTML = "";
    const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchedProducts.length === 0) {
        showMessage(container, "No encontramos productos con ese término de búsqueda", imageUrl);
    } else {
        renderAllData(searchedProducts, container);
    }
}


// Inicializar los filtros y eventos 

export function initializeFilters(productsData, contentCards, inputSelect, searchInput) {
    let selectedCategory = "all";
    // esto podr'ia estar en una constante global
    const imageUrl = '/src/assets/error.png';

    inputSelect.addEventListener("change", () => {
        selectedCategory = inputSelect.value;
        const filteredProducts = selectProduct(productsData, selectedCategory, contentCards, imageUrl);
        if (filteredProducts.length > 0) {
            searchProduct(filteredProducts, searchInput.value, contentCards, imageUrl);
        }
    });

    searchInput.addEventListener("input", () => {
        const filteredProducts = selectProduct(productsData, selectedCategory, contentCards, imageUrl);
        if (filteredProducts.length > 0) {
            searchProduct(filteredProducts, searchInput.value, contentCards, imageUrl);
        }
    });

    renderAllData(productsData, contentCards);
}
