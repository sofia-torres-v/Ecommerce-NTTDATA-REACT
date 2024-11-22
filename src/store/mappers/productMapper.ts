import { ProductResponse } from "../domains/product.domains";
import { CategoryResponse } from "../domains/category.domains";


export function mapperProducts(products: ProductResponse[]): ProductResponse[] {
  return products.map((product) => ({
      category: product.category,
      discountPercentage: product.discountPercentage,
      price: product.price,
      thumbnail: product.thumbnail,
      title: product.title,
  }));
}

export function mapperCategories(categories: CategoryResponse[]): string[] {
  return categories.map((category) => category.name);
}