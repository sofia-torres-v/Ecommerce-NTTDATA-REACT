import { CategoryResponse } from "../../domain/category.domain";
import { ProductResponse } from "../../domain/product.domain";

export function mapperProducts(products: ProductResponse[]): ProductResponse[] {
  return products.map((product) => ({
      category: product.category,
      discountPercentage: product.discountPercentage,
      price: product.price,
      thumbnail: product.thumbnail,
      title: product.title,
      id:product.id
  }));
}

export function mapperCategories(categories: CategoryResponse[]): string[] {
  return categories.map((category) => category.name);
}
