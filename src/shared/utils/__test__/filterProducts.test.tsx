// import { ProductResponse } from "../../../domain/product.domain";
import { filterProducts } from "../filterProducts";


test("debe filtrar los productos por el término de búsqueda", () => {
  const products = [
    { id: 1, title: "Camiseta Azul", category: "Ropa", price: 25, thumbnail: "url_to_image", discountPercentage: 10 },
    { id: 2, title: "Pantalón Verde", category: "Ropa", price: 40, thumbnail: "url_to_image", discountPercentage: 5 },
  ];
  const searchTerm = "camiseta";
  const selectedCategory = "ropa";  // Puede ser "default" o una categoría específica

  const filteredProducts = filterProducts(products, searchTerm, selectedCategory);

  console.log(filteredProducts);  // Verifica el contenido de los productos filtrados

  expect(filteredProducts).toHaveLength(1);  // Asegúrate de que hay 1 producto
  expect(filteredProducts[0].title).toBe("Camiseta Azul");  // Asegúrate de que el título sea correcto
});
