// CartIcon.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useCartState } from '../../../context/CartContext';
import { RoutesEnum } from '../../../shared/utils/routes.enum';
import CartIcon from '../CartIcon';

jest.mock("../../context/CartContext", () => ({
  useCartState: jest.fn() as jest.MockedFunction<typeof useCartState>, 
}));

describe("CartIcon", () => {
  it("should render cart item count correctly when items are in the cart", () => {
    // Mockeamos los datos de items
    (useCartState as jest.Mock).mockReturnValue({
      items: [
        { id: "1", productId: 101, name: "Producto A", price: 29.99, image: "image_url", quantity: 2 },
        { id: "2", productId: 102, name: "Producto B", price: 19.99, image: "image_url", quantity: 1 },
      ]
    });

    render(
      <Router>
        <CartIcon />
      </Router>
    );

    // Verificamos que el componente renderiza el número total de artículos correctamente
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should render 0 when the cart is empty", () => {
    // Mockeamos los datos con un carrito vacío
    (useCartState as jest.Mock).mockReturnValue({
      items: []
    });

    render(
      <Router>
        <CartIcon />
      </Router>
    );

    // Verificamos que el componente muestra '0' cuando no hay artículos
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should link to the correct route", () => {
    // Mockeamos los datos de items
    (useCartState as jest.Mock).mockReturnValue({
      items: [
        { id: "1", productId: 101, name: "Producto A", price: 29.99, image: "image_url", quantity: 2 }
      ]
    });

    render(
      <Router>
        <CartIcon />
      </Router>
    );

    // el Link lleva al lugar correcto
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', RoutesEnum.CART_SUMMARY);
  });
});
