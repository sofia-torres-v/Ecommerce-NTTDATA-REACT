import {LuShoppingCart} from "react-icons/lu";
import "./nav.css";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__content container">
                <div className="nav__logo-box">
                    <img className="nav__logo-image" src="./src/assets/icon-logo.webp" alt="Logo de Market" />
                    <span className="nav__logo-text">Market</span>
                </div>
                <div className="nav__cart-box">
                    <LuShoppingCart className="nav__cart-icon"  />
                    <span id="cart-counter" className="nav__cart-counter">
                        0
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
