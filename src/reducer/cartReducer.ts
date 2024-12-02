import { CartActions, CartAction, CartState } from "../domain/cart.domain";

export const initialCartState: CartState = {
  items: [],
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      const existingProduct = state.items.find(item => item.productId === action.payload.productId);
      let updatedItems;

      if (existingProduct) {
        updatedItems = state.items.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return { ...state, items: updatedItems };

    case CartActions.RemoveFromCart:
      const filteredItems = state.items.filter(item => item.productId !== action.payload.productId);
      return { ...state, items: filteredItems };

    case CartActions.UpdateQuantity:
      const updatedItemsWithQuantity = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: updatedItemsWithQuantity };

    default:
      return state;
  }
};
