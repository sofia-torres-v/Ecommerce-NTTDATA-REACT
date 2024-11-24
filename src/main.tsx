import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {GlobalAppProvider} from "./context/AppContext.tsx";
import "./index.css";
import App from "./App.tsx";
import {CartProvider} from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CartProvider>
            <GlobalAppProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalAppProvider>
        </CartProvider>
    </StrictMode>
);
