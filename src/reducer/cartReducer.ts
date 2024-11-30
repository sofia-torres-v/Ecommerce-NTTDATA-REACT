import { CartActions, CartAction, CartState } from "../domain/cart.domain";

export const initialCartState: CartState = {
  items: [],
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case CartActions.RemoveFromCart:
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload.productId),
      };
    case CartActions.UpdateQuantity:
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};
