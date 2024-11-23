import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import MainLayout from "./component/mainLayout/MainLayout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
