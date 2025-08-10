import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalAppProvider } from "./context/AppContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <GlobalAppProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </GlobalAppProvider>
            </CartProvider>
        </AuthProvider>
    </StrictMode>
);
