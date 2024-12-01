import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useCartState } from '../../../context/CartContext';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import CartIcon from '../CartIcon';

jest.mock("../../../context/CartContext.tsx", () => ({
  useCartState: jest.fn() as jest.MockedFunction<typeof useCartState>, 
}));

describe("Componente CartIcon", () => {
  it("Debería renderizar correctamente el número de artículos cuando hay elementos en el carrito", () => {
    (useCartState as jest.Mock).mockReturnValue({
      items: [
        { productId: 101, name: "Producto A", price: 29.99, image: "image_url", quantity: 2, id: 1 },
        { productId: 102, name: "Producto B", price: 19.99, image: "image_url", quantity: 1, id: 2 },
      ]
    });

    render(
      <Router>
        <CartIcon />
      </Router>
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });


  it("Debería mostrar 0 cuando el carrito está vacío", () => {
    (useCartState as jest.Mock).mockReturnValue({
      items: []
    });

    render(
      <Router>
        <CartIcon />
      </Router>
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });


  it("Debería redirigir a la ruta que se especifica", () => {
    (useCartState as jest.Mock).mockReturnValue({
      items: [
        { id: 1, productId: 101, name: "Producto A", price: 29.99, image: "image_url", quantity: 2 },
        { id: 2, productId: 102, name: "Producto B", price: 19.99, image: "image_url", quantity: 1 }
      ]
    });
    
    render(
      <Router>
        <CartIcon />
      </Router>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', RoutesEnum.CART_SUMMARY);
  });
});
