export enum CartActions {
  AddToCart = "AddToCart",
  RemoveFromCart = "RemoveFromCart",
  UpdateQuantity = "UpdateQuantity",
}

export type CartAction = 
  | { type: CartActions.AddToCart; payload: { productId: number } }
  | { type: CartActions.RemoveFromCart; payload: { productId: number } }
  | { type: CartActions.UpdateQuantity; payload: { productId: number; quantity: number } };
