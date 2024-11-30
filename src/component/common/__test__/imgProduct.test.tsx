// ImageProduct.test.tsx
import { render, screen } from "@testing-library/react";
import ImageProduct from "../ImageProduct";


describe("ImageProduct", () => {
  it("debe renderizar la imagen correctamente", () => {
    render(<ImageProduct src="https://example.com/product.jpg" alt="Product" className="image-class" />);
    const image = screen.getByAltText("Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/product.jpg");
  });
});
