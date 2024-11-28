import { FC } from "react";
import DetailsProduct from "../common/DetailsProduct";
import ImageProduct from "../common/ImageProduct";
import QuantityControls from "../common/QuantityControls";
import { CartItemType } from "../../domain/cart.domain";

interface CartItemCardProps {
  item: CartItemType;
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}

const CartItemCard: FC<CartItemCardProps> = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div className="cart-item-card">
      <ImageProduct src={item.image} alt={item.name} className="cart-item-card__image" />
      <DetailsProduct title={item.name} price={item.price} className="cart-item-card__details" />
      <QuantityControls
        quantity={item.quantity}
        increment={() => incrementItem(item.productId)}
        decrement={() => decrementItem(item.productId)}
      />
      <button
        className="cart-item-card__button-delete"
        onClick={() => removeItem(item.productId)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItemCard;
