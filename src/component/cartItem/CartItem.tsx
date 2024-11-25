import { FC } from "react";
import QuantityControls from "../common/QuantityControls";
import { CartItemProps } from "../../types/cart-types";
import ImageProduct from "../common/ImageProduct";
import DetailsProduct from "../common/DetailsProduct";
import './carItem.css'

interface CartItemCardProps extends CartItemProps {
  layout?: "cart" | "modal"; 
}

const CartItemCard: FC<CartItemCardProps> = ({ item, incrementItem, decrementItem, removeItem, layout = "cart" }) => {
  return (
    <div className={`cart-item-card ${layout}`}>

      <ImageProduct src={item.image} alt={item.name} className="cart-item-image" />
      <DetailsProduct title={item.name} price={item.price} />

      {layout === "cart" && (
        <QuantityControls
          quantity={item.quantity}
          increment={() => incrementItem(item.productId)}
          decrement={() => decrementItem(item.productId)}
        />
      )}
      
      {layout === "cart" && <button  className="button-delete" onClick={() => removeItem(item.productId)}>Eliminar</button>}
    </div>
  );
};

export default CartItemCard;
