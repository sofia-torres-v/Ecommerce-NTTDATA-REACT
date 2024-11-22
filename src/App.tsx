import {Route, Routes} from "react-router-dom";
import MainLayout from "./app/layouts/mainLayout/MainLayout";

import "./App.css";
import Home from "./app/pages/home/Home";
import Products from "./app/pages/products/Products";


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
