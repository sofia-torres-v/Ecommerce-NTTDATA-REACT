import { useCartDispatch, useCartState } from "../../context/CartContext";
import { CartActions } from "../../domain/cart.domain";

export const useCart = () => {
  const state = useCartState();
  const dispatch = useCartDispatch();

  const incrementItem = (productId: number) => {
    const item = state.items.find(item => item.productId === productId);
    if (item) {
      dispatch({
        type: CartActions.UpdateQuantity,
        payload: { productId, quantity: item.quantity + 1 },
      });
    }
  };

  const decrementItem = (productId: number) => {
    const item = state.items.find(item => item.productId === productId);
    if (item && item.quantity > 1) {
      dispatch({
        type: CartActions.UpdateQuantity,
        payload: { productId, quantity: item.quantity - 1 },
      });
    } else {
      removeItem(productId);
    }
  };

  const removeItem = (productId: number) => {
    dispatch({
      type: CartActions.RemoveFromCart,
      payload: { productId },
    });
  };

  return {
    items: state.items, 
    incrementItem,
    decrementItem,
    removeItem,
  };
};
