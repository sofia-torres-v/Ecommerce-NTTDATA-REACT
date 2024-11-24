import { FC } from "react";
import './detailsProduct.css'

interface ProductDetailsProps {
  title: string;
  price: number;
  category?: string;
  discount?: string;
  layout?: "products" | "modal";
}

const DetailsProduct: FC<ProductDetailsProps> = ({ title, price, category, discount, layout = "products"}) => {
  return (
    <div className={`details-product ${layout}`}>
      {discount && <p className="product-discount">{discount}</p>}
      <h3 className="product-title">{title}</h3>
      <p className="product-price">S/{price}</p>
      {category && <p className="product-category">Categoría: {category}</p>}
    </div>
  );
};

export default DetailsProduct;
