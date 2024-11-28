import { FC } from "react";
import './imageProduct.css';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageProduct: FC<ProductImageProps> = ({ src, alt, className }) => {
  return <img
    src={src}
    alt={alt}
    className={className} />;
};

export default ImageProduct;
