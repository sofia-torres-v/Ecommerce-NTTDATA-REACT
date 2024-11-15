import { fetchData, fetchCategories } from './js/api.js';  
import { renderAllData, renderCategory } from './js/dom.js';

const contentCards = document.querySelector('.content-cards');
const categorySelect = document.querySelector('#category-select');


async function initApp() {
  const productsData = await fetchData();
  const productsCategories = await fetchCategories();
  console.log(productsCategories)
  
  // Renderizar todos los productos 
  renderAllData(productsData, contentCards)

  // Renderizar categrías
  renderCategory(productsCategories, categorySelect)

}

initApp();



