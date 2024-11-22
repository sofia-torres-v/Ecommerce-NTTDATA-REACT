import {useContext} from "react";
import {ProductContext} from "../../../store/contexts/ProductContext";
import Card from "../../../shared/component/card/Card";
import './products.css';

const Products = () => {
    const {productsData} = useContext(ProductContext);

    return (
        <>
            <h1 className="products__title" >Nuestros Productos</h1>
            <div className="products__content container">
                {productsData.map((product) => (
                    <Card key={product.title} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;
