import { loadProductsAndCategories } from "./shared/actions/appActions";
import { useGlobalAppDispatch } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./component/mainLayout/MainLayout";
import Products from "./pages/productsView/Products";
import CartView from "./pages/cartView/CartView";
import LoginView from "./pages/login/LoginView";
import { RoutesEnum } from "./shared/enums/routes.enum";


function App() {
    const dispatch = useGlobalAppDispatch();

    useEffect(() => {
        loadProductsAndCategories(dispatch);
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<LoginView />} />
                    <Route path={RoutesEnum.PRODUCTS} element={<Products />} />
                    <Route path={RoutesEnum.CART_VIEW}  element={<CartView />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
