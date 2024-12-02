import { createContext, useReducer, useContext, FC, PropsWithChildren } from "react";
import { cartReducer, initialCartState } from "../reducer/cartReducer";
import { CartAction, CartState } from "../domain/cart.domain";
import useCartStorage from "../shared/hooks/useCartStorage";

const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === null) {
    throw new Error("useCartState debe usarse dentro de un CartProvider");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === null) {
    throw new Error("useCartDispatch debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // persistente del carrito
  const [cartItemsFromStorage] = useCartStorage(initialCartState.items);

  // Reducer manejar el estado del carrito
  const [state, dispatch] = useReducer(cartReducer, {
    items: cartItemsFromStorage,
  });


  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>  
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
