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
    layout?: "products" | "modal";
}

const Card: FC<CardProps> = ({ title, image, price, category, discount, roundPercentage, onAddToCart, layout = "products" }) => {
    return (
        <div className="card">
            <ImageProduct src={image} alt={title} layout={layout} />
            <DetailsProduct
                title={title}
                price={price}
                category={category}
                discount={roundPercentage(discount)}
                layout={layout}
            />
            <Button label="Agregar" onClick={onAddToCart} icon={<LuShoppingCart />} className="card-button" />
        </div>
    );
};

export default Card;
