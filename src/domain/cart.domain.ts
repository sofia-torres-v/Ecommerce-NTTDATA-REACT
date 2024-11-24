export interface CartItemType {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export enum CartActions {
  AddToCart = "AddToCart",
  RemoveFromCart = "RemoveFromCart",
  UpdateQuantity = "UpdateQuantity",
}
