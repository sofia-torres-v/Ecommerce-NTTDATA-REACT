// el test debe simiular el comportamiento de un provider, modificando los datos que recibe o ejecutando las acciones
import { render, screen } from '@testing-library/react';
import { CartProvider, useCartState } from '../../context/CartContext';

const TestComponent = () => {
  const cartState = useCartState();
  return <p data-testid="cart-items-count">{cartState.items.length}</p>;
};

describe('Contexto CartContext', () => {
  test('Debería renderizar un botón con un icono', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    // (debería mostrar 0)
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('0');
  });
});
