import { FC, useState } from "react";
import { useGlobalAppState } from "../../context/AppContext";
import ProductList from "../../component/productList/ProductList";
import { useCartDispatch } from "../../context/CartContext";
import Input from "../../component/input/Input";
import Select from "../../component/select/Select";
import { IoIosSearch } from "react-icons/io";
import { CartActions } from "../../domain/cart.domain";
import "./products.css";

const Products: FC = () => {
  const { products, categories } = useGlobalAppState();
  const dispatch = useCartDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId); // Encuentra el producto por id

    if (product) {
      dispatch({
        type: CartActions.AddToCart,
        payload: {
          productId: product.id,
          name: product.title, 
          price: product.price, 
          image: product.thumbnail, 
          quantity: 1, 
        },
      });
    }
  };

  // Filtrar productos por búsqueda y categoría
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
      <div className="products__inputs">
        <Input value={searchTerm} onChange={setSearchTerm} icon={<IoIosSearch className="icon-search" />} />
        <Select options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} />
      </div>

      <h1 className="products__title container">Productos Disponibles</h1>
      <div className="product__content">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Products;
