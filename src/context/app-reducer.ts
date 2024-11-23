import {AppActions} from "../types/app-types";
import {ProductResponse} from "../domain/product.domain";
import { AppState, DispatchObject } from "../domain/app.domain";

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
