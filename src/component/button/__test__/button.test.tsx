import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Componente Button', () => {
  it('Debería Renderiza el botón con un texto y maneja el evento clic', () => {
    const handleClick = jest.fn(); 

    render(<Button label="Click me" onClick={handleClick} />); 

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument(); 

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });


  it('Debería Renderiza el botón con un texto y maneja el evento clic', () => {
    const handleClick = jest.fn();
    const icon = <span>Icon</span>; 

    render(<Button icon={icon} onClick={handleClick} />); 

    const button = screen.getByRole('button');
    expect(button).toContainHTML('<span>Icon</span>'); 
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });


  it('Debería renderiza un botón con una clase personalizada', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button label="Styled Button" onClick={handleClick} className="custom-class" />
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('custom-class');
  });
});
