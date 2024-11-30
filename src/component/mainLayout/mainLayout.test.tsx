import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Para envolver el componente con un router
import MainLayout from "./MainLayout";

// wrapper para envolver el componente con BrowserRouter
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("MainLayout", () => {
  test("renders the header with Nav component", () => {
    render(<MainLayout />, { wrapper: Wrapper });
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders the main section with Outlet", () => {
    render(<MainLayout />, { wrapper: Wrapper });
    const outletElement = screen.getByRole("main");
    expect(outletElement).toBeInTheDocument();
  });

  test("renders the footer with Footer component", () => {
    render(<MainLayout />, { wrapper: Wrapper });
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
