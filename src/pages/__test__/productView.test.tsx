import { render, screen, fireEvent } from '@testing-library/react';
import { useGlobalAppState } from '../../context/AppContext';
import { useCartDispatch } from '../../context/CartContext';
import Products from '../productsView/Products';

jest.mock('../../context/AppContext', () => ({
  useGlobalAppState: jest.fn(),
}));

jest.mock('../../context/CartContext', () => ({
  useCartDispatch: jest.fn(),
}));


describe('Componente Products', () => {
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


  test('Debería renderizar la lista de productos correctamente', () => {
    render(<Products />);
    expect(screen.getByText('Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Producto 2')).toBeInTheDocument();
    expect(screen.getByText('Producto 3')).toBeInTheDocument();
  });
  

  test('Debería llamar a dispatch cuando un producto es agregado al carrito', () => {

    render(<Products />);
    const addButton = screen.getByTestId('add-to-cart-1'); 
    fireEvent.click(addButton);

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
  

  test('Debería filtrar productos por categoría', async () => {
    render(<Products />);
  
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Categoría 1' } });

    const product1 = await screen.findByTestId('add-to-cart-1');
    const product3 = await screen.findByTestId('add-to-cart-3');
  
    expect(product1).toBeInTheDocument();
    expect(product3).toBeInTheDocument();
  
    expect(screen.queryByTestId('add-to-cart-2')).toBeNull();
  });
});
