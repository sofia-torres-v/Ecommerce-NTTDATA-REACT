import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { username } = useAuth();  

  if (!username) {  
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
