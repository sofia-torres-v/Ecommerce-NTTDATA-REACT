export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export const initialCartState: CartState = {
  items: [],
};

export enum CartActions {
  AddToCart = "AddToCart",
  RemoveFromCart = "RemoveFromCart",
  UpdateQuantity = "UpdateQuantity",
}

export const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        console.log("Updated Cart:", { items: updatedItems });
        return { items: updatedItems };
      } else {
        const newItems = [...state.items, { productId: action.payload.productId, quantity: 1 }];
        console.log("Updated Cart with New Product:", { items: newItems });
        return { items: newItems };
      }
    
    case CartActions.RemoveFromCart:
      return { items: state.items.filter(item => item.productId !== action.payload.productId) };

    case CartActions.UpdateQuantity:
      return {
        items: state.items.map(item =>
          item.productId === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
};
