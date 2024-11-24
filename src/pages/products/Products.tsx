import React, {useState} from "react";
import {useGlobalAppState} from "../../context/AppContext";
import ProductList from "../../component/productList/ProductList";
import {useCartDispatch} from "../../context/CartContext";
import {CartActions} from "../../types/cart-types";
import Input from "../../component/input/Input";
import Select from "../../component/select/Select";

const Products: React.FC = () => {
    const {products, categories} = useGlobalAppState();
    const dispatch = useCartDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

    const handleAddToCart = (productId: number) => {
        dispatch({type: CartActions.AddToCart, payload: {productId}});
    };

    // Filtrar búsqueda y categoría seleccionada
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === "Todas las categorías" ||
            product.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    const categoryOptions = ["Todas las categorías", ...categories];

    return (
        <div>
            <h1>Productos Disponibles</h1>

            <Input value={searchTerm} onChange={setSearchTerm} />

            <Select options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} />

            <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        </div>
    );
};

export default Products;
