import {FC} from "react";
import {LuShoppingCart} from "react-icons/lu";

import "./card.css";
import Button from "../button/Button";

interface CardProps {
    title: string;
    image: string;
    price: number;
    category: string;
    discount: number;
    onAddToCart: () => void;
    roundPercentage: (discount: number) => string;
}

const Card: FC<CardProps> = ({title, image, price, category, discount, roundPercentage, onAddToCart}) => {
    return (
        <div className="card">
            <div className="card__discount">
                <p className="card__discount-text">{roundPercentage(discount)}</p>
            </div>
            <img className="card__image" src={image} alt={title} />
            <h3 className="card__title">{title}</h3>
            <div className="card__info">
                <p className="card__info-label">
                    Precio: <span className="card__info-price">s/{price}</span>
                </p>
                <p className="card__info-label">
                    Categoría: <span className="card__info-category">{category}</span>
                </p>
            </div>

            <Button label="Agregar" onClick={onAddToCart} icon={<LuShoppingCart />} className="card__button" />
        </div>
    );
};

export default Card;
