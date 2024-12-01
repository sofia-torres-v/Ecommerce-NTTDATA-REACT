import { mapperCategories, mapperProducts } from '../product.mapper';

test('mapperProducts debería mapear correctamente los productos y devolver lo especificado', () => {
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


test('mapperCategories debería mapear correctamente las categorías y devolver lo especificado', () => {
  const categories = [
    { name: "Beauty", slug: "beauty", url: "https://dummyjson.com/products/category/beauty" },];

  const mappedCategories = mapperCategories(categories);
  expect(mappedCategories).toEqual(["Beauty"]);
});