import { FC } from "react";
import { ProductResponse } from "../../domain/product.domain";
import { roundPercentage } from "../../shared/utils/formatPrice";
import Card from "../card/Card";
import "./productList.css";

interface ProductListProps {
  products: ProductResponse[];
  onAddToCart: (productId: number) => void;
}

const ProductList: FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="products__content">
      {products.map((product) => (
        <Card
          key={product.title}
          title={product.title}
          image={product.thumbnail}
          price={product.price}
          category={product.category}
          discount={product.discountPercentage}
          onAddToCart={() => onAddToCart(product.id)} 
          roundPercentage={roundPercentage}
        />
      ))}
    </div>
  );
};

export default ProductList;
