import {AppActions} from "../domain/app-store";
import {ProductResponse} from "../domain/product.domain";

export interface DispatchObject<A, T = any> {
    type: A;
    payload?: T;
}

export interface AppState {
    products: ProductResponse[];
    categories: string[];
}

export const initialState: AppState = {
    products: [],
    categories: [],
};

export const appReducer = (state: AppState, {type, payload}: DispatchObject<AppActions>) => {
    switch (type) {
        case AppActions.SaveProducts:
            return {
                ...state,
                products: payload as ProductResponse[],
            };
        case AppActions.SaveCategories:
            return {
                ...state,
                categories: payload as string[],
            };
        default:
            throw new Error("No hay action disponible");
    }
};
