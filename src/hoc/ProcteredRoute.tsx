// ProtectedRoute.tsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { username } = useAuth();  // Accede a 'username' en lugar de 'user'

  if (!username) {  // Verificamos si hay un username para proteger la ruta
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
