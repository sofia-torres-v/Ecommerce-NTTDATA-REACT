import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../../context/AuthContext'; 
import { act } from 'react-dom/test-utils';
import ProductsView from './ProductsView';

const mockProducts = [
  { id: 1, name: 'Producto A', category: 'Categoría 1' },
  { id: 2, name: 'Producto B', category: 'Categoría 2' },
  { id: 3, name: 'Producto C', category: 'Categoría 1' },
];

jest.mock('../path/to/apiService', () => ({
  fetchProducts: jest.fn(() => Promise.resolve(mockProducts)),
}));

test('Debería filtrar productos por categoría', async () => {
  await act(async () => {
    render(
      <AuthProvider>
        <ProductsView />
      </AuthProvider>
    );
  });

  const productElements = await screen.findAllByTestId('product-item');
  expect(productElements).toHaveLength(3);


  const filterSelect = screen.getByLabelText('Filtrar por categoría'); 
  fireEvent.change(filterSelect, { target: { value: 'Categoría 1' } });


  const filteredProducts = await screen.findAllByTestId('product-item');
  expect(filteredProducts).toHaveLength(2);


  expect(screen.getByText('Producto A')).toBeInTheDocument();
  expect(screen.getByText('Producto C')).toBeInTheDocument();
  expect(screen.queryByText('Producto B')).not.toBeInTheDocument();
});
