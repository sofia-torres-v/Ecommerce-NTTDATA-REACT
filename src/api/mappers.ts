import { Product } from "../types/product";
import { Category } from "../types/category";

// Mapper para estructurar datos que necesito
export function mapperProducts(products: Product[]): Product[] {
  return products.map((product) => ({
      category: product.category,
      discountPercentage: product.discountPercentage,
      price: product.price,
      thumbnail: product.thumbnail,
      title: product.title,
  }));
}

// Mapper para categorías (API devuelve un objeto con más propiedades)
export function mapperCategories(categories: Category[]): string[] {
  return categories.map((category) => category.slug);
}
