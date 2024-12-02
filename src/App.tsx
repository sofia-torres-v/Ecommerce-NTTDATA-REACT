import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProductsView from './pages/productsView/ProductsView';
import LoginView from './pages/login/LoginView';
import { useEffect } from 'react';
import { loadProductsAndCategories } from './shared/actions/appActions';
import { useGlobalAppDispatch } from './context/AppContext';
import CartView from './pages/cartView/CartView';

function App() {
    const dispatch = useGlobalAppDispatch();

    useEffect(() => {
        loadProductsAndCategories(dispatch);
    }, [dispatch]);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route
          path="/products"
          element={
              <ProductsView />
          }
        />
        <Route
          path="/cartView"
          element={
              <CartView />
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
