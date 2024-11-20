// Mapper para estructurar datos que necesito
export function mapperProducts(products) {
  return products.map((product) => ({
      title: product.title,
      thumbnail: product.thumbnail,
      category: product.category,
      price: product.price,
  }));
}

// Mapper para categorías (API devuelve más propiedades)
export function mapperCategories(categories) {
  return categories.map((category) => category.name);
}
