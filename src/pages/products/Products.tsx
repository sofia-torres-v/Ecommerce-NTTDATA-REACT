import { FC, useState } from "react";
import { useGlobalAppState } from "../../context/AppContext";
import { useCartDispatch } from "../../context/CartContext";
import { CartActions } from "../../types/cart-types";
import { IoIosSearch } from "react-icons/io";
import { Category } from "../../domain/category.domain";
import ProductList from "../../component/productList/ProductList";
import Input from "../../component/input/Input";
import Select from "../../component/select/Select";
import "./products.css";
// import Cart from "../../component/cart/Cart";

const Products: FC = () => {
    const { products, categories } = useGlobalAppState();
    const dispatch = useCartDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

    const handleAddToCart = (productId: number) => {
        console.log("Producto agregado al carrito:", productId); 
        dispatch({ type: CartActions.AddToCart, payload: { productId } });
    };

    // Filtrar búsqueda y categoría
    const filteredProducts = products.filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        const categoryLower = selectedCategory.toLowerCase();

        const matchesSearch = product.title.toLowerCase().includes(searchLower);
        const matchesCategory = selectedCategory === Category.All || 
            product.category.toLowerCase() === categoryLower;

        return matchesSearch && matchesCategory;
    });

    const categoryOptions = [Category.All, ...categories];

    return (
        <div>
            <div className="products__inputs">
                <Input value={searchTerm}
                    onChange={setSearchTerm}
                    icon={<IoIosSearch className="icon-search" />} />
                <Select
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={setSelectedCategory} />
            </div>

            <h1 className="products__title container">Productos Disponibles</h1>
            <div className="product__content">
                <ProductList
                    products={filteredProducts}
                    onAddToCart={handleAddToCart} />
            </div>
            {/* <Cart /> */}

        </div>
    );
};

export default Products;
