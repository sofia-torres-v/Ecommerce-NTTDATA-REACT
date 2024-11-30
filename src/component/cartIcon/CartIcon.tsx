import { LuShoppingCart } from "react-icons/lu";
import { useCartState } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartIcon.css";
import { RoutesEnum } from "../../shared/utils/routes.enum";
import { CartItemType } from "../../domain/cart.domain";


const CartIcon = () => {
  const { items }:{ items:CartItemType[]} = useCartState();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to={RoutesEnum.CART_SUMMARY}>
      <div className="nav__cart-box">
        <LuShoppingCart className="nav__cart-icon"/>
        <span id="cart-counter" className="nav__cart-counter">
          {cartItemCount > 0 ? cartItemCount : 0}
        </span>
      </div>
    </Link>
  );
};

export default CartIcon;