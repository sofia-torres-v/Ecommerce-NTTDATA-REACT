import {fetchData, fetchCategories} from "./api/fetch.js";
import {renderAllData} from "./dom/product";
import {renderCategory} from "./dom/categories";
import {selectProduct, searchProduct} from "./utils/filter.js";
import {showMessage} from "./dom/message.js";

const contentCards = document.querySelector(".content-cards");
const inputSelect = document.querySelector("#category-select");
const searchInput = document.querySelector("#search");

let selectedCategory = "all"; // Categoría seleccionada

async function initApp() {

    const productsData = await fetchData(); 
    const productsCategories = await fetchCategories(); 

    renderAllData(productsData, contentCards); 
    renderCategory(productsCategories, inputSelect);

    // Filtrar productos por categoría
    inputSelect.addEventListener("change", () => {
        selectedCategory = inputSelect.value;
        const filteredProducts = selectProduct(productsData, selectedCategory, contentCards);
        searchProduct(filteredProducts, searchInput.value, contentCards);
    });

    // Filtrar productos por búsqueda
    searchInput.addEventListener("input", () => {
        const filteredProducts = selectProduct(productsData, selectedCategory, contentCards);
        searchProduct(filteredProducts, searchInput.value, contentCards);
    });
}

initApp();
