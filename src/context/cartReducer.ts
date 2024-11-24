import { CartActions } from "../domain/cart.domain";
import { CartAction} from "../types/cart-types";

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
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
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              productId: action.payload.productId,
              name: action.payload.name, 
              price: action.payload.price, 
              image: action.payload.image,  
              quantity: 1,
            },
          ],
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
