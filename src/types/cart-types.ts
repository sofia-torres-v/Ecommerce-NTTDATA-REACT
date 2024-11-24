import { CartItemType } from "../domain/cart.domain";

// Para componentes (props de CartItemCard)
export interface CartItemProps {
  item: CartItemType;  // CartItemType para definir el item
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}
