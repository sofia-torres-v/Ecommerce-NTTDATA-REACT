import {ProductResponse} from "./product.domain";

// Dispatch contiene la acción y su payload
export interface DispatchObject<A, T = unknown> {
    type: A;
    payload?: T;
}

export interface AppState {
    products: ProductResponse[]; 
    categories: string[]; 
}

// Estado inicial 
export const initialState: AppState = {
    products: [],
    categories: [],
};

