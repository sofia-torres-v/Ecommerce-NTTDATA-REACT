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
    const context = useContext(AppStateContext);

    if (!context) {
        throw new Error("useGlobalAppState debe usarse dentro de AppStateContext");
    }
    return context;
};

const useGlobalAppDispatch = (): AppDispatch => {
    const context = useContext(AppDispatchContext);

    if (!context) {
        throw new Error("useGlobalAppDispatch debe usarse dentro de AppDispatchContext");
    }
    return context;
};

export { GlobalAppProvider, useGlobalAppState, useGlobalAppDispatch };
