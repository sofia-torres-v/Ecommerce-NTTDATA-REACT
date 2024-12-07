import {loadProductsAndCategories} from "./shared/actions/appActions";
import {Route, Routes, Navigate} from "react-router-dom";
import {AuthProvider, useAuth} from "./context/AuthContext";
import {useGlobalAppDispatch} from "./context/AppContext";
import {useEffect} from "react";
import ProductsView from "./pages/productsView/ProductsView";
import LoginView from "./pages/login/LoginView";
import CartView from "./pages/cartView/CartView";
import MainLayout from "./component/mainLayout/MainLayout";

function App() {
    const dispatch = useGlobalAppDispatch();
    const {isAuthenticated} = useAuth();

    useEffect(() => {
        loadProductsAndCategories(dispatch);
    }, [dispatch]);

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LoginView />} />
                <Route element={<MainLayout />}>
                    <Route path="/products" element={isAuthenticated ? <ProductsView /> : <Navigate to="/" />} />
                    <Route path="/cartView" element={isAuthenticated ? <CartView /> : <Navigate to="/" />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
