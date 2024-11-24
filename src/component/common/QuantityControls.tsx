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
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default QuantityControls;
