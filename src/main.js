import { fetchData, fetchCategories } from "./js/api.js";
import { renderAllData, renderCategory } from "./js/dom.js";
import { selectProduct, searchProduct } from "./js/filters.js";

const contentCards = document.querySelector(".content-cards");
const inputSelect = document.querySelector("#category-select");
const searchInput = document.querySelector("#search");

let selectedCategory = "all"; // Mantiene la categoría seleccionada

async function initApp() {
    const productsData = await fetchData();
    const productsCategories = await fetchCategories();

    renderCategory(productsCategories, inputSelect);
    renderAllData(productsData, contentCards);

    // Evento al select para filtrar productos por categoría
    inputSelect.addEventListener("change", () => {
        selectedCategory = inputSelect.value;
        const filteredProducts = selectProduct(productsData, selectedCategory);
        searchProduct(filteredProducts, searchInput.value, contentCards);
    });

    // Evento al input para filtrar productos por búsqueda
    searchInput.addEventListener("input", () => {
        const filteredProducts = selectProduct(productsData, selectedCategory);
        searchProduct(filteredProducts, searchInput.value, contentCards);
    });
}

initApp();