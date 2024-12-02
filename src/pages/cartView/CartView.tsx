import { FC } from 'react';
import { useCart } from "../../shared/hooks/useCart";
import CartShop from '../../component/carShop/CartShop';
import FormShop from '../../component/forms/FormShop';
import './cartView.css'
import Nav from '../../component/navbar/Nav';
import Footer from '../../component/footer/Footer';

const CartView: FC = () => {
  const { items, incrementItem, decrementItem, removeItem } = useCart();
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <header className='header'>
        <Nav />
      </header>
      <main>
        {items.length > 0 ? (
          <section>
            <div className="cart-header">
              <h3>Imagen</h3>
              <h3>Nombre</h3>
              <h3>Precio</h3>
              <h3>Cantidad</h3>
              <h3>Eliminar</h3>
            </div>
            {items.map((item) => (
              <CartShop
                key={item.productId}
                item={item}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                removeItem={removeItem}
              />
            ))}
            <div className="total-amount container">
              <h2>Total a pagar: S/{totalAmount.toFixed(2)}</h2>
            </div>
          </section>
        ) : (
          <p className='cart-empty'>&#58;&#40; No hay productos en el carrito</p>
        )}

        <div className='content-form container'>
          <FormShop />
        </div>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  );
};

export default CartView;
