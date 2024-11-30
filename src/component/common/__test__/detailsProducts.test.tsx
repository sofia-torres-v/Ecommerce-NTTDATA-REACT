import { render, screen } from "@testing-library/react";


import DetailsProduct from "../DetailsProduct";

it("debe mostrar el descuento del producto", () => {
  render(<DetailsProduct title="Product Title" price={100} category="beauty" discount="10%" className="details-class" />);
  expect(screen.getByText("-10%")).toBeInTheDocument(); // Asegúrate de que el signo negativo esté en el texto
});
