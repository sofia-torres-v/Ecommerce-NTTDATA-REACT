import { filterProducts } from "../filterProducts";

test("Debería filtrar los productos por el término de búsqueda que ingresa el usuario", () => {
  const products = [
    { id: 1, title: "Camiseta Azul", category: "Ropa", price: 25, thumbnail: "url_to_image", discountPercentage: 10 },
    { id: 2, title: "Pantalón Verde", category: "Ropa", price: 40, thumbnail: "url_to_image", discountPercentage: 5 },
  ];
  const searchTerm = "camiseta";
  const selectedCategory = "ropa"; 
  
  const filteredProducts = filterProducts(products, searchTerm, selectedCategory);

  expect(filteredProducts).toHaveLength(1);  // Asegúrate de que hay 1 producto
  expect(filteredProducts[0].title).toBe("Camiseta Azul"); 

});
