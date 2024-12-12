// test?
import { loadProductsAndCategories } from "./shared/actions/appActions";
import { useGlobalAppDispatch } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./shared/enums/routes.enum";
import { useEffect } from "react";
import CartSumary from "./pages/cartView/CartSumary";
import MainLayout from "./component/mainLayout/MainLayout";
import Products from "./pages/productsView/Products";

function App() {
    const dispatch = useGlobalAppDispatch();

    useEffect(() => {
        loadProductsAndCategories(dispatch);
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Products />} /> 
                    <Route path={RoutesEnum.CART_SUMMARY} element={<CartSumary />} />
                    <Route path={RoutesEnum.PRODUCTS} element={<Products />} />
                </Route>
            </Routes>

        </>
    );
}

export default App;
