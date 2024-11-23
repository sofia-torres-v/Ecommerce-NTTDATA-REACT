import React, { createContext, useReducer, useContext, FC, PropsWithChildren } from "react";
import { cartReducer, CartState, initialCartState } from "./cart-reducer";
import { CartAction } from "../types/cart-types";

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | undefined>(undefined);

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
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
