import { render, screen, fireEvent } from '@testing-library/react';
import Products from '../productsView/Products';
import { useGlobalAppState } from '../../context/AppContext';
import { useCartDispatch } from '../../context/CartContext';

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

  test('renders the list of products correctly', () => {
    render(<Products />);

    // Verifica que los productos están siendo renderizados
    expect(screen.getByText('Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Producto 2')).toBeInTheDocument();
    expect(screen.getByText('Producto 3')).toBeInTheDocument();
  });

  test('should call dispatch when a product is added to the cart', () => {
    render(<Products />);
  
    // Encuentra el botón "Agregar" para el primer producto usando el data-testid
    const addButton = screen.getByTestId('add-to-cart-1'); 
  
    // Simula el clic en el botón "Agregar"
    fireEvent.click(addButton);
  
    // Verifica que el dispatch haya sido llamado con el producto correcto
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: {
        productId: mockProducts[0].id,
        name: mockProducts[0].title,
        price: mockProducts[0].price,
        image: mockProducts[0].thumbnail,
        quantity: 1,
        id: mockProducts[0].id,
      },
    });
  });
  
  test('should filter products by category', async () => {
    render(<Products />);
  
    // Filtra por "Categoría 1" utilizando el select
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Categoría 1' } });
  
    // Verifica que los productos de "Categoría 1" están visibles
    const product1 = await screen.findByTestId('add-to-cart-1');
    const product3 = await screen.findByTestId('add-to-cart-3');
  
    expect(product1).toBeInTheDocument();
    expect(product3).toBeInTheDocument();
  
    // Asegúrate de que "Producto 2" de "Categoría 2" no esté visible
    expect(screen.queryByTestId('add-to-cart-2')).toBeNull();
  });
  
  
  
  
  
  


});
