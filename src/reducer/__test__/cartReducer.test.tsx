import { CartAction, CartActions, CartItemType, CartState } from "../../domain/cart.domain";
import { cartReducer, initialCartState } from "../cartReducer";

describe('cartReducer', () => {
  it('Debería agregar un producto al carrito', () => {
    const product: CartItemType = {
      productId: 1,
      name: 'Product 1',
      price: 100,
      image: 'product1.jpg',
      quantity: 1,
      id: 101,
    };

    const action: CartAction = {
      type: CartActions.AddToCart,
      payload: product,
    };

    const newState = cartReducer(initialCartState, action);

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0]).toEqual(product);
  });

  
  it('Debería eliminar un producto del carrito', () => {
    const state: CartState = {
      items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 100,
          image: 'product1.jpg',
          quantity: 1,
          id: 101,
        },
        {
          productId: 2,
          name: 'Product 2',
          price: 200,
          image: 'product2.jpg',
          quantity: 1,
          id: 102,
        },
      ],
    };

    const action: CartAction = {
      type: CartActions.RemoveFromCart,
      payload: { productId: 1 },
    };

    const newState = cartReducer(state, action);

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].productId).toBe(2);
  });


  it('Debería actualizar la cantidad de un producto', () => {
    const state: CartState = {
      items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 100,
          image: 'product1.jpg',
          quantity: 1,
          id: 101,
        },
        {
          productId: 2,
          name: 'Product 2',
          price: 200,
          image: 'product2.jpg',
          quantity: 1,
          id: 102,
        },
      ],
    };

    const action: CartAction = {
      type: CartActions.UpdateQuantity,
      payload: { productId: 1, quantity: 3 },
    };

    const newState = cartReducer(state, action);

    expect(newState.items).toHaveLength(2);
    expect(newState.items[0].quantity).toBe(3);
  });


  it('Debería retornar el estado actual si se pasa una acción no válida', () => {
    const state: CartState = {
      items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 100,
          image: 'product1.jpg',
          quantity: 1,
          id: 101,
        },
      ],
    };

    const action = {
      type: 'INVALID_ACTION',
      payload: null,
    } as unknown as CartAction; // Simula una acción inválida

    const newState = cartReducer(state, action);

    expect(newState).toEqual(state);
  });
});
