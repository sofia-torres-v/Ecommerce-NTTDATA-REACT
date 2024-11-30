import { useEffect, useState } from "react";
import { CartItemType } from "../../domain/cart.domain";


const useCartStorage = (initialState: CartItemType[]) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialState);

  useEffect(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setCartItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return cartItems;
};

export default useCartStorage;
