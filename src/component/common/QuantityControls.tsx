import { FC } from "react";
import "./QuantityControls.css";

interface QuantityControlsProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const QuantityControls: FC<QuantityControlsProps> = ({ quantity, increment, decrement }) => {
  return (
    <div className="quantity-controls">
      <button className="quantity-controls__button" onClick={decrement}>-</button>
      <span className="span-quantity">{quantity}</span>
      <button className="quantity-controls__button" onClick={increment}>+</button>
    </div>
  );
};

export default QuantityControls;
