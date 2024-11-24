import { CartItem } from "../context/cartReducer";
import { CartActions } from "../domain/cart.domain";

export interface AddToCartAction {
  type: CartActions.AddToCart;
  payload: CartItem; //CartItem, que incluye quantity
}

export interface RemoveFromCartAction {
  type: CartActions.RemoveFromCart;
  payload: { productId: number };
}

export interface UpdateQuantityAction {
  type: CartActions.UpdateQuantity;
  payload: { productId: number; quantity: number };
}

export type CartAction = AddToCartAction | RemoveFromCartAction | UpdateQuantityAction;
