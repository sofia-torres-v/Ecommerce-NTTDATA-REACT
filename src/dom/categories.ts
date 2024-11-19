import { capitalizeFirstLetter } from "../utils/format";

// Renderizar las categorias en el select

export function renderCategory(categories: string[], categorySelect: HTMLElement): void {
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "Todas las categorías";
  categorySelect.appendChild(allOption);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = capitalizeFirstLetter(category);
    categorySelect.appendChild(option);
  });

}
