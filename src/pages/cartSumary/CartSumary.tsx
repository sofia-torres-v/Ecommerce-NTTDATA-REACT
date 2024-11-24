import { useCartState } from "../../context/CartContext";

const CartSumary = () => {
  const { items } = useCartState(); // Obtener los productos del carrito

  return (
      <div>
          <h2>Carrito</h2>
          {items.length > 0 ? (
              <ul>
                  {items.map(item => (
                      <li key={item.productId}>
                          Producto ID: {item.productId}, Cantidad: {item.quantity}
                      </li>
                  ))}
              </ul>
          ) : (
              <p>No hay productos en el carrito.</p>
          )}
      </div>
  );
};
export default CartSumary;