import {fetchData, fetchCategories} from "./js/api.js";
import {renderAllData, renderCategory} from "./js/dom.js";
import {selectProduct, searchProduct} from "./js/filters.js";

const contentCards = document.querySelector(".content-cards");
const categorySelect = document.querySelector("#category-select");
const searchInput = document.querySelector("#search");

async function initApp() {
    const productsData = await fetchData();
    console.log(productsData)
    const productsCategories = await fetchCategories();

    renderAllData(productsData, contentCards);
    renderCategory(productsCategories, categorySelect);

    categorySelect.addEventListener("change", () => {
        const selectedCategory = categorySelect.value;
        selectProduct(productsData, selectedCategory, contentCards);
    });

    searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        searchProduct(productsData, searchTerm, contentCards);  
    })
}

initApp(); // Inicia mi aplicación
