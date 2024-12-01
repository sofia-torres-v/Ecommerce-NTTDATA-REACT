import { render, screen } from '@testing-library/react';
import { IoIosSearch } from 'react-icons/io'; 
import InputComponent from '../InputComponent';

test('Debería renderizar el componente con un ícono', () => {
  render(
    <InputComponent
      placeholder="Buscar producto"
      value=""
      onChange={() => {}}
      icon={<IoIosSearch />} 
    />
  );
  const input = screen.getByPlaceholderText(/Buscar producto/i);
  expect(input).toBeInTheDocument();

  const icon = screen.getByTestId('icon-search'); 
  expect(icon).toBeInTheDocument();
});


test('Debería renderizar el componente sin ícono', () => {
  render(
    <InputComponent
      placeholder="Buscar producto"
      value=""
      onChange={() => {}}
    />
  );
  const input = screen.getByPlaceholderText(/Buscar producto/i);
  expect(input).toBeInTheDocument();

  const icon = screen.queryByTestId('icon-search');
  expect(icon).not.toBeInTheDocument();
});
