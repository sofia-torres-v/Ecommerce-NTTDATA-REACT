import { FC } from "react";
import { CartItemProps } from "../../types/cart-types";

const CartItemCard: FC<CartItemProps> = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Precio: ${item.price}</p>
      </div>
      <div>
        <button onClick={() => decrementItem(item.productId)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementItem(item.productId)}>+</button>
      </div>
      <button onClick={() => removeItem(item.productId)}>Eliminar</button>
    </div>
  );
};

export default CartItemCard;
