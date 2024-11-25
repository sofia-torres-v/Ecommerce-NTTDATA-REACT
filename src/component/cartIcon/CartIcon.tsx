import { LuShoppingCart } from "react-icons/lu";
import { useCartState } from "../../context/CartContext";
import './cartIcon.css'

import "./cartIcon.css";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { items } = useCartState();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to={'./CartSumary'}>
      <div className="nav__cart-box">
        <LuShoppingCart className="nav__cart-icon" />
        <span id="cart-counter" className="nav__cart-counter">
          {cartItemCount > 0 ? cartItemCount : 0}
        </span>
      </div>
    </Link>
  );
};

export default CartIcon;