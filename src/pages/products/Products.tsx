import React from "react";
import { useGlobalAppState } from "../../context/app-context";
import ProductList from "../../component/productList/ProductList";
import { CartActions, useCartDispatch } from "../../context/cart-context";



const Products: React.FC = () => {

  const { products } = useGlobalAppState(); // Accedemos a los productos del contexto
  const dispatch = useCartDispatch(); // Obtenemos el dispatch del contexto del carrito

  const handleAddToCart = (productId: number) => {
    // Llamamos a la acción de agregar al carrito
    dispatch({ type: CartActions.AddToCart, payload: { productId } });
  };
  return (
    <div>
      <h1>Productos Disponibles</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
