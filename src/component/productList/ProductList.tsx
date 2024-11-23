import { FC } from "react";
import { ProductResponse } from "../../domain/product.domain";
import Card from "../card/Card";
import './productList.css';
import { roundPercentage } from "../../shared/utils/formatPrice";
import { CartActions, useCartDispatch } from "../../context/cart-context"; // Importar CartActions

const ProductList: FC<{ products: ProductResponse[] }> = ({ products }) => {
  const dispatch = useCartDispatch(); // Obtienes el dispatch del carrito
  
  const handleAddToCart = (product: ProductResponse) => {
    dispatch({ type: CartActions.AddToCart, payload: { productId: product.id } });
  };

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
          onAddToCart={() => handleAddToCart(product)}
          roundPercentage={roundPercentage}
        />
      ))}
    </div>
  );
};

export default ProductList;
