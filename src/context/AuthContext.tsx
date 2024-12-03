import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;  // Agregamos el username en el contexto
  login: (username: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const token = localStorage.getItem('authToken');
    if (token && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  const login = (username: string, token: string) => {
    localStorage.setItem('username', username);  // Guardamos el username en localStorage
    localStorage.setItem('authToken', token);    // Guardamos el token en localStorage
    setUsername(username);                       // Actualizamos el username en el estado
    setIsAuthenticated(true);                    // Marcamos al usuario como autenticado
  };

  const logout = () => {
    localStorage.removeItem('username');  // Eliminamos el username del localStorage
    localStorage.removeItem('authToken'); // Eliminamos el token del localStorage
    setUsername(null);                    // Limpiamos el estado del username
    setIsAuthenticated(false);            // Marcamos al usuario como no autenticado
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
