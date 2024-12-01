import { GlobalAppProvider } from "../../../context/AppContext";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../../../context/CartContext"; 
import { ReactNode } from "react";
import MainLayout from "../MainLayout";
import Products from "../../../pages/productsView/Products";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={children} />
      </Route>
    </Routes>
  </BrowserRouter>
);


describe("Componente MainLayout", () => {
  test("Debería renderizar el encabezado con un componente Nav", () => {
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


  test("Debería renderizar la sección principal con el Outlet que permite inserción", () => {
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


  test("Debería renderizar el pie de página con el componente Footer", () => {
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
