import { FC } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Button from "../button/Button";
import DetailsProduct from "../common/DetailsProduct";
import ImageProduct from "../common/ImageProduct";
import "./card.css";

interface CardProps {
    title: string;
    image: string;
    price: number;
    category: string;
    discount: number;
    onAddToCart: () => void;
    roundPercentage: (discount: number) => string;
}

const Card: FC<CardProps> = ({ title, image, price, category, discount, roundPercentage, onAddToCart }) => {
    return (
        <div className="card">
            <ImageProduct
                src={image}
                alt={title}
                className="card__image" />
            <DetailsProduct
                title={title}
                price={price}
                category={category}
                discount={roundPercentage(discount)}
                className="card__info"
            />
            <Button
                label="Agregar"
                icon={<LuShoppingCart />}
                onClick={onAddToCart}
                className="button__icon" 
            />
        </div>
    );
};

export default Card;
