import { render, screen } from '@testing-library/react';
import { CartProvider, useCartState } from '../../context/CartContext';

const TestComponent = () => {
  const cartState = useCartState();
  return <p data-testid="cart-items-count">{cartState.items.length}</p>;
};

describe('CartContext', () => {
  test('should provide initial state with empty cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    // Verifica que el carrito está vacío al principio (debería mostrar 0)
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('0');
  });
});
