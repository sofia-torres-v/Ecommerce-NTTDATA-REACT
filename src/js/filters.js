import {renderAllData} from "./dom.js";

// Filtra productos
export function selectProduct( products, selectedCategory, container){

    const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    console.log("Productos filtrados:", filteredProducts);
    container.innerHTML = ""; 

    renderAllData(filteredProducts, container);
}

