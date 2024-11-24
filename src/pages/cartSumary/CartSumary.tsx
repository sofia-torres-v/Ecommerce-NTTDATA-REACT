import { FC } from 'react'; 
import CartItemCard from "../../component/cartItem/CartItem";
import { useCart } from "../../shared/hooks/useCart";

const CartSummary: FC = () => {
  const { items, incrementItem, decrementItem, removeItem } = useCart();

  //  total a pagar
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {items.length > 0 ? (
        <>
          <div>
            {items.map((item) => {
              return (
                <CartItemCard
                  key={item.productId}
                  item={item}
                  incrementItem={incrementItem}
                  decrementItem={decrementItem}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
          {/* Mostrar el total a pagar */}
          <div className="total-amount">
            <h2>Total a pagar: ${totalAmount.toFixed(2)}</h2> {/* Formato con 2 decimales */}
          </div>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default CartSummary;
