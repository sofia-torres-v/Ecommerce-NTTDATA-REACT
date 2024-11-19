import { renderAllData } from "../dom/products.js";
import { showMessage } from "../dom/message.js";
import { Product } from "../types/product.js";


// Filtrar productos por categoría 
export function selectProduct(products:Product[], selectedCategory: string, container: HTMLElement, imageUrl: string): Product[] {
    container.innerHTML = "";
    const filteredProducts =
        selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    if (filteredProducts.length === 0) {
        showMessage(container, "No encontramos productos en esta categoría", imageUrl);
    }
    return filteredProducts;
}


// Filtrar productos por término de búsqueda 
export function searchProduct(products:Product[], searchTerm: string, container: HTMLElement, imageUrl:string): void {
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
export function initializeFilters(productsData: Product[], contentCards: HTMLElement, inputSelect: HTMLSelectElement, searchInput: HTMLInputElement) {
    let selectedCategory = "all";
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

