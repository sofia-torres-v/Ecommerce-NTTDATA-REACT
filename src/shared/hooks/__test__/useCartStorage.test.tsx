import { renderHook } from "@testing-library/react";
import { CartItemType } from "../../../domain/cart.domain";
import useCartStorage from "../useCartStorage";

describe('useCartStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with items from localStorage if they exist', () => {
    const mockItems: CartItemType[] = [
      {
        id: 1,
        productId: 101, 
        name: 'Item 1',
        quantity: 1,
        price: 10.0,
        image: 'image1.jpg',
      },
    ];
    localStorage.setItem('cartItems', JSON.stringify(mockItems));

    const { result } = renderHook(() => useCartStorage([]));

    expect(result.current[0]).toEqual(mockItems);
  });

  it('should initialize with the initial state if localStorage is empty', () => {
    const initialState: CartItemType[] = [
      {
        id: 2,
        productId: 102, 
        name: 'Item 2',
        quantity: 1,
        price: 15.0,
        image: 'image2.jpg',
      },
    ];

    const { result } = renderHook(() => useCartStorage(initialState));

    expect(result.current[0]).toEqual(initialState);
  });
});
