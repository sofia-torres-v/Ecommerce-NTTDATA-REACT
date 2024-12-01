import { FC } from 'react';
import CartItemCard from "../../component/cartItem/CartItem";
import { useCart } from "../../shared/hooks/useCart";
import './cardSumary.css'
import FormPuch from '../../component/forms/FormPuch';
import './cardSumary.css'

const CartSummary: FC = () => {
  const { items, incrementItem, decrementItem, removeItem } = useCart();
  
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      
        {items.length > 0 ? (
          <>
            {items.map((item) => (

              <CartItemCard
                key={item.productId}
                item={item}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                removeItem={removeItem}
              />

            ))}

            <div className="total-amount">
              <h2>Total a pagar: S/{totalAmount.toFixed(2)}</h2>
            </div>
          </>
        ) : (
          <p className='cart-empty'>&#58;&#40; No hay productos en el carrito</p>
        )}
     

      <div className='form-cart'>
        <FormPuch />
      </div>

    </>
  );
};

export default CartSummary;
