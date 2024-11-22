import { ProductResponse } from "../domains/product.domains";
import { Category } from "../domains/category.domains";


export function mapperProducts(products: ProductResponse[]): ProductResponse[] {
  return products.map((product) => ({
      category: product.category,
      discountPercentage: product.discountPercentage,
      price: product.price,
      thumbnail: product.thumbnail,
      title: product.title,
  }));
}

export function mapperCategories(categories: Category[]): string[] {
  return categories.map((category) => category.slug);
}