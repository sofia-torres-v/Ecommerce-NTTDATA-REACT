import { loadProductsAndCategories } from "./shared/actions/appActions";
import { Route, Routes } from "react-router-dom";
import { useGlobalAppDispatch } from "./context/AppContext";
import { useEffect } from "react";
import ProductsView from "./pages/productsView/ProductsView";
import LoginView from "./pages/login/LoginView";
import CartView from "./pages/cartView/CartView";
import MainLayout from "./component/mainLayout/MainLayout";
import ProtectedRoute from "./hoc/ProcteredRoute";

function App() {
    const dispatch = useGlobalAppDispatch();

    useEffect(() => {
        loadProductsAndCategories(dispatch);
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<LoginView />} />
            <Route element={<MainLayout />}>
                <Route
                    path="/products"
                    element={
                        <ProtectedRoute>
                            <ProductsView />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/cartView"
                    element={
                        <ProtectedRoute>
                            <CartView />
                        </ProtectedRoute>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
