import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactNode } from "react";
import MainLayout from "../MainLayout";
import Products from "../../../pages/productsView/Products";

// Asegúrate de importar los proveedores correctos
import { CartProvider } from "../../../context/CartContext";  // O el path correcto
import { GlobalAppProvider } from "../../../context/AppContext";  // O el path correcto

const Wrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={children} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// Aquí envolvemos 'Products' en los proveedores necesarios
describe("MainLayout", () => {
  test("renders the header with Nav component", () => {
    render(
      <Products />,
      { wrapper: ({ children }) => (
        <CartProvider>
          <GlobalAppProvider>
            <Wrapper>{children}</Wrapper>
          </GlobalAppProvider>
        </CartProvider>
      )}
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders the main section with Outlet", () => {
    render(
      <Products />,
      { wrapper: ({ children }) => (
        <CartProvider>
          <GlobalAppProvider>
            <Wrapper>{children}</Wrapper>
          </GlobalAppProvider>
        </CartProvider>
      )}
    );
    const outletElement = screen.getByRole("main");
    expect(outletElement).toBeInTheDocument();
  });

  test("renders the footer with Footer component", () => {
    render(
      <Products />,
      { wrapper: ({ children }) => (
        <CartProvider>
          <GlobalAppProvider>
            <Wrapper>{children}</Wrapper>
          </GlobalAppProvider>
        </CartProvider>
      )}
    );
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
