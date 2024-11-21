// Renderizar las categorias en el select

export function renderCategory(categories, categorySelect) {
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Todas las categorías";
  categorySelect.appendChild(allOption);

  categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      // esto se podr'ia reemplazar con un text-transform: capitalize; en css
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categorySelect.appendChild(option);
  });
}

