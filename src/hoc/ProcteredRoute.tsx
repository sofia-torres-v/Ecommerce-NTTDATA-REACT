import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  // Mientras carga el estado desde localStorage
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si no hay sesión, mandar al login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, mostrar la página
  return children;
};

export default ProtectedRoute;
