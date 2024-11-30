import { render, screen } from '@testing-library/react';
import Card from '../Card'; 

// Mock de la función roundPercentage
const mockRoundPercentage = jest.fn((discount: number) => `${discount}%`);

describe('Card', () => {
  it('debe renderizar el título del producto', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={mockRoundPercentage}
        onAddToCart={() => {}}
      />
    );
    expect(screen.getByText("Product Title")).toBeInTheDocument();
  });

  it('debe mostrar el precio del producto', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={mockRoundPercentage}
        onAddToCart={() => {}}
      />
    );
    expect(screen.getByText("S/100")).toBeInTheDocument();
  });

  it('debe llamar a roundPercentage con el descuento', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={mockRoundPercentage}
        onAddToCart={() => {}}
      />
    );
    expect(mockRoundPercentage).toHaveBeenCalledWith(10); 
  });

  it('debe renderizar el componente ImageProduct con la imagen correcta', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={mockRoundPercentage}
        onAddToCart={() => {}}
      />
    );
    const image = screen.getByAltText("Product Title");
    expect(image).toHaveAttribute('src', 'product-image.jpg'); // Verifica que la imagen tenga la URL correcta
  });
});
