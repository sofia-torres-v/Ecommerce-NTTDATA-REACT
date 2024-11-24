import { FC } from 'react'; 
import CartItemCard from "../../component/cartItem/CartItem";
import { useCart } from "../../shared/hooks/useCart";

const CartSummary: FC = () => {
  const { items, incrementItem, decrementItem, removeItem } = useCart();

  console.log(items);  

  return (
    <div>
      <h2>Carrito</h2>
      {items.length > 0 ? (
        items.map((item) => {
          console.log(item); 
          return (
            <CartItemCard
              key={item.productId}
              item={item}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              removeItem={removeItem}
            />
          );
        })
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default CartSummary;
