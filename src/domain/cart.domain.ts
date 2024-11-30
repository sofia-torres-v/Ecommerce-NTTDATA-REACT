export interface CartItemType {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  id: number ; 
}

export enum CartActions {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  UpdateQuantity = "UPDATE_QUANTITY",
}

// Acciones del carrito
export interface AddToCartAction {
  type: CartActions.AddToCart;
  payload: CartItemType;
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

export interface CartState {
  items: CartItemType[];
}
