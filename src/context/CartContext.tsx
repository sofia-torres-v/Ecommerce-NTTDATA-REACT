import React, { createContext, useReducer, useContext, FC, PropsWithChildren, useEffect } from "react";
import { cartReducer, CartState, initialCartState } from "./cartReducer";
import { CartAction } from "../types/cart-types";

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | undefined>(undefined);

// Hook para acceder al estado del carrito
export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) throw new Error("useCartState must be used within a CartProvider");
  return context;
};

// Hook para acceder al dispatch del carrito
export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("useCartDispatch must be used within a CartProvider");
  return context;
};

// Componente CartProvider
export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  // Obtener el estado del carrito desde el localStorage (si existe)
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

 
  const initialState = savedCartItems.length > 0
    ? { items: savedCartItems }
    : initialCartState;

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Guardar el estado del carrito en el localStorage cada vez que se actualice
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
