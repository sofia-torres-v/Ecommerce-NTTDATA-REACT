import { FC, useState } from "react";
import { useGlobalAppState } from "../../context/AppContext";
import { useCartDispatch } from "../../context/CartContext";
import { IoIosSearch } from "react-icons/io";
import { CartActions } from "../../domain/cart.domain";
import { TEXTS } from "../../shared/utils/textContants";
import ProductList from "../../component/productList/ProductList";
import Select from "../../component/select/Select";
import Input from "../../component/input/Input";
import "./products.css";

const Products: FC = () => {
  const { products, categories } = useGlobalAppState();
  const dispatch = useCartDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(TEXTS.defaultCategory);

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === TEXTS.defaultCategory ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categoryOptions = [TEXTS.defaultCategory, ...categories];

  return (
    <div>
      <div className="products__inputs">
        <Input
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={<IoIosSearch className="icon-search" />}
          placeholder="Buscar productos..."
        />
        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <h1 className="products__title container">Productos Disponibles</h1>
      <>
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </>
    </div>
  );
};

export default Products;