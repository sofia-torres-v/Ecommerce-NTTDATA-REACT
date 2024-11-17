import { fetchData, fetchCategories } from "./api/fetch.js";
import { renderCategory } from "./dom/categories.js";
import { initializeFilters } from "./utils/filter.js";

const contentCards = document.querySelector(".content-cards");
const inputSelect = document.querySelector("#category-select");
const searchInput = document.querySelector("#search");

async function initApp() {
    const productsData = await fetchData();
    const productsCategories = await fetchCategories();

    renderCategory(productsCategories, inputSelect);
    initializeFilters(productsData, contentCards, inputSelect, searchInput);
}

initApp();
