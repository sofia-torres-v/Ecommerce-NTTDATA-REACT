import { createContext, PropsWithChildren, useReducer, FC, useContext } from "react";
import { AppState, initialState } from "../domain/appState.domain";
import { AppDispatch } from "../types/app-types";
import { appReducer } from "../reducer/appReducer";

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

const GlobalAppProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};

const useGlobalAppState = (): AppState => {
    const context = useContext(AppStateContext) as AppState;

    if (context) {
        return context;
    }
    throw new Error("useGlobalAppState debe usarse dentro de AppStateContext");
};

const useGlobalAppDispatch = (): AppDispatch => {
    const context = useContext(AppDispatchContext) as AppDispatch;

    if (context) {
        return context;
    }
    throw new Error("useGlobalAppDispatch debe usarse dentro de AppDispatchContext");
};

export { GlobalAppProvider, useGlobalAppState, useGlobalAppDispatch };
