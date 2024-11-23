import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {GlobalAppProvider} from "./context/app-context.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalAppProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalAppProvider>
    </StrictMode>
);
