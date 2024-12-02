import { FC } from "react";
import { CartItemType } from "../../domain/cart.domain";
import ImageProduct from "../common/ImageProduct";
import QuantityControls from "../common/QuantityControls";
import './cartSop.css'

interface CartItemCardProps {
  item: CartItemType;
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}

const CartShop: FC<CartItemCardProps> = ({ item, incrementItem, decrementItem, removeItem }) => {
  return (
    <div className="cart-item-card">

      <div className="box-title">
        <ImageProduct src={item.image} alt={item.name} className="cart-item-card__image" />
      </div>

      <div className="box-title">
        <p>{item.name}</p>
      </div>

      <div className="box-title">
        <p>S/{item.price.toFixed(2)}</p>
      </div>

      <div className="box-title">
        <QuantityControls
          quantity={item.quantity}
          increment={() => incrementItem(item.productId)}
          decrement={() => decrementItem(item.productId)}
        />
      </div>

      <div className="box-title">
        <button
          className="cart-item-card__button-delete"
          onClick={() => removeItem(item.productId)}
        >
          Eliminar
        </button>

      </div>
    </div>
  );
};

export default CartShop;
