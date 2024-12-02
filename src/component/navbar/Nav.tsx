import { Link } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import "./nav.css";

const Nav = () => {
    const username = localStorage.getItem('username');
    return (
        <nav className="nav">
            <div className="nav__content container">
                <div className="nav__logo-box">
                    <img className="nav__logo-image" src="./src/assets/icon-logo.webp" alt="Logo de Market" />
                    <span className="nav__logo-text">Market</span>
                </div>
                <div className="nav__links">
                    <Link to="/Products" className="nav__link">Products</Link>
                </div>
                <div className="box-hello">
                    <h1 className="title-hello">¡Hola! {username}</h1>
                    <div className="nav__cart-box">
                        <CartIcon />
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Nav;