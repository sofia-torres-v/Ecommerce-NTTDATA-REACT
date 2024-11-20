// Renderizar las categorias en el select

export function renderCategory(categories, categorySelect) {
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Todas las categorías";
  categorySelect.appendChild(allOption);

  categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
  });
}

