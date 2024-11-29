import { render, screen, fireEvent } from '@testing-library/react';
import { useGlobalAppState } from '../../context/AppContext';
import { useCartDispatch } from '../../context/CartContext';
import Products from './Products';
import { CartActions } from '../../domain/cart.domain';

// Mock de los contextos
jest.mock('../../context/AppContext', () => ({
  useGlobalAppState: jest.fn(),
}));

jest.mock('../../context/CartContext', () => ({
  useCartDispatch: jest.fn(),
}));

describe('Products Component', () => {
  const mockProducts = [
    { id: 1, title: 'Producto 1', price: 100, category: 'Categoría 1', thumbnail: 'image1.jpg' },
    { id: 2, title: 'Producto 2', price: 200, category: 'Categoría 2', thumbnail: 'image2.jpg' },
    { id: 3, title: 'Producto 3', price: 300, category: 'Categoría 1', thumbnail: 'image3.jpg' },
  ];

  const mockCategories = ['Categoría 1', 'Categoría 2'];

  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useGlobalAppState as jest.Mock).mockReturnValue({
      products: mockProducts,
      categories: mockCategories,
    });

    (useCartDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  test('renders the product list with filters', () => {
    render(<Products />);

    expect(screen.getByPlaceholderText(/Buscar productos/i)).toBeInTheDocument();
    expect(screen.getByText(/Productos Disponibles/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Agregar al carrito/i)).toHaveLength(3); // Verifica 3 productos inicialmente
  });

  test('filters products by search term', () => {
    render(<Products />);

    const searchInput = screen.getByPlaceholderText(/Buscar productos/i);
    fireEvent.change(searchInput, { target: { value: 'Producto 1' } });

    expect(screen.getByText('Producto 1')).toBeInTheDocument();
    expect(screen.queryByText('Producto 2')).not.toBeInTheDocument();
  });

  test('filters products by category', () => {
    render(<Products />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Categoría 1' } });

    expect(screen.getByText('Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Producto 3')).toBeInTheDocument();
    expect(screen.queryByText('Producto 2')).not.toBeInTheDocument();
  });

  test('adds product to cart', () => {
    render(<Products />);

    const addToCartButton = screen.getAllByText(/Agregar al carrito/i)[0]; // Primer producto
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: CartActions.AddToCart,
      payload: {
        productId: 1,
        name: 'Producto 1',
        price: 100,
        image: 'image1.jpg',
        quantity: 1,
      },
    });
  });
});
