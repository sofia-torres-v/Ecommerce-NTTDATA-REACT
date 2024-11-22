import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {ProductProvider} from "./store/contexts/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ProductProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ProductProvider>
    </StrictMode>
);
