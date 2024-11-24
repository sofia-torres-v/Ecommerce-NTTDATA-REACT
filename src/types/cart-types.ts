import { CartItemType } from "../domain/cart.domain";

// Tipos usados por componentes (props de CartItemCard)
export interface CartItemProps {
  item: CartItemType;  // Tipo CartItemType para definir el item
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
}
