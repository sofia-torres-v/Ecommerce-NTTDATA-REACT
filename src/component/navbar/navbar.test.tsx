import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../../context/CartContext"; 
import { useAuth } from "../../context/AuthContext"; 
import Nav from "./Nav";

jest.mock("../../context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("Nav", () => {
  it("Debería mostrar'¡Bienvenido! Inicia sesión' cuando el usuario no está autenticado", () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      username: "",
    });

    render(
      <Router>
        <CartProvider>
          <Nav />
        </CartProvider>
      </Router>
    );

    expect(screen.getByText(/¡Bienvenido! Inicia sesión/)).toBeInTheDocument();
  });

  it("Debería mostrar '¡Hola! {nombre de usuario}' cuando el usuario está autenticado", () => {
    (useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      username: "Sofía",
    });

    render(
      <Router>
        <CartProvider>
          <Nav />
        </CartProvider>
      </Router>
    );

    expect(screen.getByText(/¡Hola! Sofía/)).toBeInTheDocument();
  });

  it("Debería representar el enlace de productos", () => {
    render(
      <Router>
        <CartProvider>
          <Nav />
        </CartProvider>
      </Router>
    );

    expect(screen.getByText(/Products/)).toBeInTheDocument();
  });

  it("Debería mostrar un CartIcon", () => {
    render(
      <Router>
        <CartProvider>
          <Nav />
        </CartProvider>
      </Router>
    );

    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });
});
