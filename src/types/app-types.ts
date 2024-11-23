import { Dispatch } from "react";
import { DispatchObject } from "../domain/app.domain";

export type AppDispatch = Dispatch<DispatchObject<AppActions>>; 

export const enum AppActions {
  SaveProducts = 'SaveProducts',
  SaveCategories = 'SaveCategories',
}
