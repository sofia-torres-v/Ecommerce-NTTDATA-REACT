import { useEffect, useState } from "react";
import { CartItemType } from "../../domain/cart.domain";

const useCartStorage = (initialState: CartItemType[]) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : initialState;
  });

  useEffect(() => {

    if (cartItems.length > 0) {
      // Elimina duplicados antes de guardar
      const uniqueItems = Array.from(
        new Map(cartItems.map(item => [item.productId, item])).values()
      );

      localStorage.setItem("cartItems", JSON.stringify(uniqueItems));
      console.log("Items únicos antes de guardar:", uniqueItems);
    }
  }, [cartItems]); 

  return [cartItems, setCartItems] as const;
};

export default useCartStorage;
