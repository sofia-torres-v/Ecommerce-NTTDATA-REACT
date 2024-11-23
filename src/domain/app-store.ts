import { Dispatch } from "react";
import { DispatchObject } from "../context/app-reducer";
export type AppDispatch = Dispatch<DispatchObject<AppActions>>; 

export const enum AppActions {
  SaveProducts = 'SaveProducts',
  SaveCategories = 'SaveCategories',
}
