import { render, screen } from '@testing-library/react';
import Card from '../Card'; 

describe('Componente Card', () => {
  it('Debería renderizar el título del producto', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={(discount) => `${discount}%`} 
        onAddToCart={() => {}}
      />
    );
    expect(screen.getByText("Product Title")).toBeInTheDocument();
  });

  it('Debería mostrar el precio del producto', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={(discount) => `${discount}%`} 
        onAddToCart={() => {}}
      />
    );
    expect(screen.getByText("S/100")).toBeInTheDocument();
  });

  it('Debería renderizar el componente ImageProduct con la imagen correcta', () => {
    render(
      <Card
        title="Product Title"
        image="product-image.jpg"
        price={100}
        category="beauty"
        discount={10}
        roundPercentage={(discount) => `${discount}%`} 
        onAddToCart={() => {}}
      />
    );
    const image = screen.getByAltText("Product Title");
    expect(image).toHaveAttribute('src', 'product-image.jpg'); 
  });
});
