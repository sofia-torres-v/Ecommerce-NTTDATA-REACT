import React, { createContext, useReducer, useContext, FC, PropsWithChildren } from "react";
import { cartReducer, initialCartState } from "../reducer/cartReducer";
import useCartStorage from "../shared/hooks/useCartStorage";
import { CartAction, CartState } from "../domain/cart.domain";

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | undefined>(undefined); 

// acceder al estado del cart
export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) throw new Error("useCartState debe usarse dentro de un CartProvider");
  return context;
};

// Acceder al dispatch del cart
export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("useCartDispatch debe usarse dentro de un CartProvider");
  return context;
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const savedCartItems = useCartStorage(initialCartState.items);
  const [state, dispatch] = useReducer(cartReducer, { items: savedCartItems });

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>  
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
