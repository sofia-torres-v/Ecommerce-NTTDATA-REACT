import { useEffect, useState } from "react";
import { CartItemType } from "../../domain/cart.domain";

const useCartStorage = (initialState: CartItemType[]) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : initialState;
  });

  useEffect(() => {
    // Guarda cada vez que cambian
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return [cartItems, setCartItems] as const;
};

export default useCartStorage;
