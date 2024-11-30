import { FC } from "react";
import './detailsProduct.css'

interface ProductDetailsProps {
  title: string;
  price: number;
  category?: string;
  discount?: string;
  className?: string;  
}

const DetailsProduct: FC<ProductDetailsProps> = ({ title, price, category, discount, className}) => {
  return (
    <div className={className}>
      {discount && <p className="card__discount">{discount}</p>}
      <h3 className="card__title">{title}</h3>
      <p className="card__info-price ">S/{price}</p>
      {category && <p className="card__info-category">Categoría: {category}</p>}
    </div>
  );
};

export default DetailsProduct;
