
export interface CartItemType {
  item: CartItemType;  // CartItemType para definir el item
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}
