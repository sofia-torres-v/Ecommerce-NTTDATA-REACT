 export enum CartActions {
    AddToCart = 'AddToCart',
    RemoveFromCart = 'RemoveFromCart',
    UpdateQuantity = 'UpdateQuantity',
  }
  
  export type CartAction =
    | { type: CartActions.AddToCart; payload: { productId: number; name: string; price: number; image: string } }
    | { type: CartActions.RemoveFromCart; payload: { productId: number } }
    | { type: CartActions.UpdateQuantity; payload: { productId: number; quantity: number } };
  
  export type CartItemProps = {
      item: CartItemType;
      incrementItem: (productId: number) => void;
      decrementItem: (productId: number) => void;
      removeItem: (productId: number) => void;
  };

  export interface CartItemType {
    productId: number;
    quantity: number;
    name: string;
    price: number;
    image: string;
  }
  

export interface CartItemType {
  productId: number; 
  name: string;       
  price: number;     
  image: string;      
  quantity: number;   
}
