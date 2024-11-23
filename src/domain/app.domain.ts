import {ProductResponse} from "./product.domain";

// Objeto Dispatch genérico que contiene la acción y su payload
export interface DispatchObject<A, T = unknown> {
    type: A;
    payload?: T;
}

// Estado de la aplicación, que incluye los productos y categorías
export interface AppState {
    products: ProductResponse[]; // Lista de productos
    categories: string[]; // Lista de categorías
}

// Estado inicial de la aplicación con productos vacíos y categorías vacías
export const initialState: AppState = {
    products: [],
    categories: [],
};
