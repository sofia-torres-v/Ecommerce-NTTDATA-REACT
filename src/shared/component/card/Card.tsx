import {LuShoppingCart} from "react-icons/lu";
import {ProductResponse} from "../../../store/domains/product.domains";
import {roundPercentage} from "../../utils/formatPrice";
import "./card.css";

const Card = ({product}: {product: ProductResponse}) => {
    return (
        <div className="card">
            <div className="card__discount">
                <p className="card__discount-text">-{roundPercentage(product.discountPercentage)}%</p>
            </div>
            <img className="card__image" src={product.thumbnail} alt={product.title} />
            <h3 className="card__title">{product.title}</h3>
            <div className="card__info">
                <div className="card__info-item">
                    <p className="card__info-label">
                        Precio: <span className="card__info-price">s/{product.price}</span>
                    </p>
                </div>
                <div className="card__info-item">
                    <p className="card__info-label">
                        Categoría: <span className="card__info-category">{product.category}</span>
                    </p>
                </div>
            </div>
            <button className="card__button">
                Agregar
                <LuShoppingCart className="card__button-icon" />
            </button>
        </div>
    );
};

export default Card;
