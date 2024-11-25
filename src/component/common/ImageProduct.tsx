import { FC } from "react";
import './imageProduct.css'

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  layout?: "products" | "modal"; 
}

const ImageProduct: FC<ProductImageProps> = ({ src, alt, layout = "products" }) => {
  return <img className={`product-image ${layout}`} 
  src={src} 
  alt={alt} 
  />;

};

export default ImageProduct;
