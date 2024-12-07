import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CartIcon from "../cartIcon/CartIcon";
import "./nav.css";

const Nav = () => {
    const { username, isAuthenticated } = useAuth();
    return (
        <nav className="nav">

            <div className="nav__content container">

                    <div className="nav__logo-box">
                        <img className="nav__logo-image" src="./src/assets/icon-logo.webp" alt="Logo de Market" />
                        <span className="nav__logo-text">Market</span>
                    </div>

                    <div className="nav__links">
                        <Link to="/products" className="nav__link">Products</Link>
                    </div>

                <div className="box-hello">
                    {isAuthenticated ? (
                        <h1 className="title-hello">¡Hola! {username}</h1>
                    ) : (
                        <h1 className="title-hello">¡Bienvenido! Inicia sesión</h1>
                    )}
                    <div className="nav__cart-box">
                        <CartIcon />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
