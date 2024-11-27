import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import MainLayout from "./component/mainLayout/MainLayout";
import CartSumary from "./pages/cartSumary/CartSumary";

function App() {
    // los paths deben estar en enum
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/CartSumary" element={<CartSumary />} />
                    <Route path="/Products" element={<Products />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
