import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {ProductProvider} from "./store/context/ProductContext.tsx";
import { CategoryProvider } from "./store/context/CategoryContex.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ProductProvider>
            <CategoryProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CategoryProvider>
        </ProductProvider>
    </StrictMode>
);
