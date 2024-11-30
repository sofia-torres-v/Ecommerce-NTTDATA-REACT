import { FC, useState } from "react";
import { useGlobalAppState } from "../../context/AppContext";
import { useCartDispatch } from "../../context/CartContext";
import { IoIosSearch } from "react-icons/io";
import { CartActions } from "../../domain/cart.domain";

import Card from "../../component/card/Card"; 
import Select from "../../component/select/Select";
import InputComponent from "../../component/input/InputComponent";
import "./products.css";
import { filterProducts } from "../../shared/utils/filterProducts";
import { roundPercentage } from "../../shared/utils/formatPrice";
import { TEXTS } from "../../shared/utils/textContants";

const Products: FC = () => {
  const { products, categories } = useGlobalAppState();
  const dispatch = useCartDispatch();

  const [searchTerm, setSearchTerm] = useState<string>(""); // El estado es de tipo string
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

  // Asegúrate de que el evento sea correctamente tipado
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // e.target.value será un string
  };

  return (
    <div>
      <div className="products__inputs">
        <InputComponent
          value={searchTerm}
          onChange={handleSearchChange} // Usamos el manejador con el tipo de evento
          icon={<IoIosSearch className="icon-search" />}
          placeholder="Buscar productos..."
          className="input-category__input"
        />
        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <h1 className="products__title container">Productos Disponibles</h1>
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
    </div>
  );
};

export default Products;
