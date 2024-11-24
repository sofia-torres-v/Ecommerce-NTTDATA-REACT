import { CartAction, CartActions } from "../types/cart-types";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export const initialCartState: CartState = {
  items: [],
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      const existingProduct = state.items.find(item => item.productId === action.payload.productId);
      
      if (existingProduct) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          return {
              ...state,
              items: state.items.map(item =>
                  item.productId === action.payload.productId
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              )
          };
      } else {
          // Si el producto no está en el carrito, agrégalo con cantidad 1
          return {
              ...state,
              items: [...state.items, { productId: action.payload.productId, quantity: 1 }]
          };
      }
    
    case CartActions.RemoveFromCart:
      return { items: state.items.filter(item => item.productId !== action.payload.productId) };

    case CartActions.UpdateQuantity:
      return {
        items: state.items.map(item =>
          item.productId === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
};
