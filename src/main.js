import {fetchData, fetchCategories} from "./js/api.js";
import {renderAllData} from "./js/dom.js";
import {renderCategory} from "./js/dom.js";
import {selectProduct} from "./js/filters.js";

const contentCards = document.querySelector(".content-cards");
const categorySelect = document.querySelector("#category-select");

async function initApp() {
    const productsData = await fetchData();
    const productsCategories = await fetchCategories();

    renderCategory(productsCategories, categorySelect);

    renderAllData(productsData, contentCards);

    // Agrega el evento al select para filtrar productos
    categorySelect.addEventListener("change", () => {
        const selectedCategory = categorySelect.value;
        selectProduct(productsData, selectedCategory, contentCards);
    });
}

initApp();
