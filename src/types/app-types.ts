import { Dispatch } from "react";
import { DispatchObject } from "../domain/appState.domain";

export type AppDispatch = Dispatch<DispatchObject<AppActions>>; 

export enum AppActions {
  SaveProducts = "SAVE_PRODUCTS",
  SaveCategories = "SAVE_CATEGORIES",
}
