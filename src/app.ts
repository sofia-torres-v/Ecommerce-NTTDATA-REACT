import {fetchData, fetchCategories} from "./api/fetch.js";
import {renderCategory} from "./dom/categories.js";
import {initializeFilters} from "./utils/filter.js";

const contentCards = document.querySelector(".content-cards") as HTMLElement;
const inputSelect = document.querySelector("#category-select") as HTMLSelectElement;
const searchInput = document.querySelector("#search") as HTMLInputElement;

if (contentCards && inputSelect && searchInput) {
    async function initApp() {
        const productsData = await fetchData();
        const productsCategories = await fetchCategories();

        initializeFilters(productsData, contentCards, inputSelect, searchInput);
        renderCategory(productsCategories, inputSelect);
    }

    initApp();
} else {
    console.error("Faltan elementos en el DOM");
}
