import { mapperCategories, mapperProducts } from '../../services/mappers/product.mapper';

// mapper de productos
test('mapperProducts - mapea correctamente los productos', () => {
  const products = [
    {
      id: 1,
      category: "beauty",
      discountPercentage: 7.17,
      price: 9.99,
      thumbnail: "image-url",
      title: "Product 1",
      description: "Description",
    }
  ];

  const mappedProducts = mapperProducts(products);
  expect(mappedProducts).toEqual([
    {
      id: 1,
      category: "beauty",
      discountPercentage: 7.17,
      price: 9.99,
      thumbnail: "image-url",
      title: "Product 1",
    }
  ]);
});


// mapper de categorias
test('mapperCategories - mapea correctamente las categorías', () => {
  const categories = [
    { name: "Beauty", slug: "beauty", url: "https://dummyjson.com/products/category/beauty" },];

  const mappedCategories = mapperCategories(categories);
  expect(mappedCategories).toEqual(["Beauty"]);
});