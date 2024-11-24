export interface CartItemType {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export enum CartActions {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  UpdateQuantity = "UPDATE_QUANTITY",
}
