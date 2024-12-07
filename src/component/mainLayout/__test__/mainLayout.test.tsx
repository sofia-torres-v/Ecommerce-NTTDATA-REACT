import { GlobalAppProvider } from "../../../context/AppContext";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../../../context/CartContext";
import { ReactNode } from "react";
import ProductsView from "../../../pages/productsView/ProductsView";
import MainLayout from "../MainLayout";
import { AuthProvider } from "../../../context/AuthContext";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

describe("Componente MainLayout", () => {
  test("Debería renderizar el encabezado con un componente Nav", () => {
    render(
      <ProductsView />,
      {
        wrapper: ({ children }) => (
          <CartProvider>
            <GlobalAppProvider>
              <Wrapper>{children}</Wrapper>
            </GlobalAppProvider>
          </CartProvider>
        ),
      }
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("Debería renderizar la sección principal con el Outlet que permite inserción", () => {
    render(
      <ProductsView />,
      {
        wrapper: ({ children }) => (
          <CartProvider>
            <GlobalAppProvider>
              <Wrapper>{children}</Wrapper>
            </GlobalAppProvider>
          </CartProvider>
        ),
      }
    );
    const outletElement = screen.getByRole("main");
    expect(outletElement).toBeInTheDocument();
  });

  test("Debería renderizar el pie de página con el componente Footer", () => {
    render(
      <ProductsView />,
      {
        wrapper: ({ children }) => (
          <CartProvider>
            <GlobalAppProvider>
              <Wrapper>{children}</Wrapper>
            </GlobalAppProvider>
          </CartProvider>
        ),
      }
    );
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
