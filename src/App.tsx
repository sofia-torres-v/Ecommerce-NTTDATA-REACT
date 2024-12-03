import { Route, Routes, Navigate } from 'react-router-dom';
import ProductsView from './pages/productsView/ProductsView';
import LoginView from './pages/login/LoginView';
import { useEffect } from 'react';
import { loadProductsAndCategories } from './shared/actions/appActions';
import { useGlobalAppDispatch } from './context/AppContext';
import CartView from './pages/cartView/CartView';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  const dispatch = useGlobalAppDispatch();
  const { isAuthenticated } = useAuth();  

  useEffect(() => {
    loadProductsAndCategories(dispatch);
  }, [dispatch]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route
          path="/products"
          element={isAuthenticated ? <ProductsView /> : <Navigate to="/" />}
        />
        <Route
          path="/cartView"
          element={isAuthenticated ? <CartView /> : <Navigate to="/" />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
