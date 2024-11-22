import {useContext} from "react";
import {ProductContext} from "../../../store/contexts/ProductContext";
import Card from "../../../shared/component/card/Card";
import SelectCategory from "../../../shared/component/select/SelectCategory";
import InputCategory from "../../../shared/component/input/InputCategory";
import "./products.css";

const Products = () => {
    const {productsData} = useContext(ProductContext);

    return (
        <>
            <div className="products__inputs">
                <InputCategory />
                <div>
                    <SelectCategory />
                </div>
            </div>

            <h1 className="products__title container">Nuestros Productos</h1>

            <div className="products__content container">
                {productsData.map((product) => (
                    <Card key={product.title} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;
