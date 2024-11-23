// cart-context.tsx
import { createContext, useReducer, useContext, PropsWithChildren, FC } from "react";

export enum CartActions {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART"
}

interface CartState {
  items: { productId: number; quantity: number }[];
}

const initialState: CartState = {
  items: []
};

const cartReducer = (state: CartState, action: { type: CartActions; payload: any }): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
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
        
        return {
          ...state,
          items: [...state.items, { productId: action.payload.productId, quantity: 1 }]
        };
      }
    default:
      return state;
  }
};

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<any> | undefined>(undefined);

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) throw new Error("useCartState must be used within a CartProvider");
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("useCartDispatch must be used within a CartProvider");
  return context;
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
