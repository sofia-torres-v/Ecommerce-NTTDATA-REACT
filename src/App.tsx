import { fetchCategories, fetchProducts } from "./services/api/product.service";
import { mapperCategories, mapperProducts } from "./services/mappers/product.mapper";
import { useGlobalAppDispatch } from "./context/AppContext";
import {Route, Routes} from "react-router-dom";
import { RoutesEnum } from "./shared/utils/routes.enum";
import { AppActions } from "./types/app-types";
import { useEffect } from "react";
import CartSumary from "./pages/cartSumary/CartSumary";
import MainLayout from "./component/mainLayout/MainLayout";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import useLoadData from "./shared/hooks/useLoadData";

function App() {
    
    useLoadData();

    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={RoutesEnum.HOME} element={<Home />} />
                    <Route path={RoutesEnum.CART_SUMMARY} element={<CartSumary />} />
                    <Route path={RoutesEnum.PRODUCTS} element={<Products />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
