import { Dispatch } from "react";
import { DispatchObject } from "../context/reducer";
export type AppDispatch = Dispatch<DispatchObject<AppActions>>; 

export const enum AppActions {
  SaveProducts = 'SaveProducts',
  SaveCategories = 'SaveCategories',
}
