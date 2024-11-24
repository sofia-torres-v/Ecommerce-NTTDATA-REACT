import { FC } from "react";
interface CartItemProps {
  item: CartItemType;

  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}
export interface CartItemType {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

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
