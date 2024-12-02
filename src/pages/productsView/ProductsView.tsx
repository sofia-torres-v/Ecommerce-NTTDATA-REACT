// src/pages/productsView/ProductsView.tsx
import { useGlobalAppState } from "../../context/AppContext";
import { useCartDispatch } from "../../context/CartContext";
import { roundPercentage } from "../../shared/utils/formatPrice";
import { filterProducts } from "../../shared/utils/filterProducts";
import { FC, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CartActions } from "../../domain/cart.domain";
import { TEXTS } from "../../shared/utils/textContants";
import InputComponent from "../../component/input/InputComponent";
import Select from "../../component/select/Select";
import Card from "../../component/card/Card";
import "./products.css";
import Nav from "../../component/navbar/Nav";
import Footer from "../../component/footer/Footer";

const ProductsView: FC = () => {
  const { products, categories } = useGlobalAppState();
  console.log(products)
  const dispatch = useCartDispatch();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState(TEXTS.defaultCategory);

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    dispatch({
      type: CartActions.AddToCart,
      payload: {
        productId: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
        id: product.id,
      },
    });
  };

  const categoryOptions = [TEXTS.defaultCategory, ...categories];
  const filteredProducts = filterProducts(products, searchTerm, selectedCategory);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header className="header">
        <Nav />
      </header>
      <main>
        <div className="products__inputs">
          <InputComponent
            value={searchTerm}
            onChange={handleSearchChange}
            icon={<IoIosSearch className="icon-search" />}
            placeholder="Buscar productos..."
            className="input-category__input"
            iconClassName="input-category__icon"
          />
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            className="select-category"
          />
        </div>

        <h1 className="products__title container">Nuestros Productos</h1>
        <div className="products__content">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              category={product.category}
              discount={product.discountPercentage}
              onAddToCart={() => handleAddToCart(product.id)}
              roundPercentage={roundPercentage}
              data-testid={`add-to-cart-${product.id}`}
            />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductsView;
