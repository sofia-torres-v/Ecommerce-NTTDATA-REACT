import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';


describe('Button', () => {
  it('should render a button with label', () => {
    const handleClick = jest.fn(); // Creamos una función mock para el click

    render(<Button label="Click me" onClick={handleClick} />); // Renderizamos el botón con una etiqueta

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument(); // Aseguramos que el botón esté en el DOM

    fireEvent.click(button); // Disparamos un clic en el botón
    expect(handleClick).toHaveBeenCalledTimes(1); // Verificamos que la función onClick se haya llamado
  });

  it('should render a button with an icon', () => {
    const handleClick = jest.fn();
    const icon = <span>Icon</span>; // Usamos un ejemplo simple para el ícono

    render(<Button icon={icon} onClick={handleClick} />); // Renderizamos el botón con un ícono

    const button = screen.getByRole('button');
    expect(button).toContainHTML('<span>Icon</span>'); // Verificamos que el ícono esté presente

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); // Verificamos que la función onClick se haya llamado
  });

  it('should render button with custom className', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Button label="Styled Button" onClick={handleClick} className="custom-class" />
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('custom-class'); // Verificamos que tenga la clase personalizada
  });
});
