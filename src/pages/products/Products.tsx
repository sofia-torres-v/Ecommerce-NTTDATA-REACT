import {useGlobalAppState} from "../../context/app-context";
import "./products.css";

const Products = () => {
    const {products, categories} = useGlobalAppState();

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.title}>{product.title}</li>
                ))}
            </ul>

            <h2>Categorías</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
