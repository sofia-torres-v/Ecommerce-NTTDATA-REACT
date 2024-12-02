import { createContext, useContext, useState } from "react";

// src/context/AuthContext.tsx
interface User {
  username: string;
  accessToken: string;
}

type AuthContextType = {
  user: User | null;
  login: (user: User) => void; // Agrega la función login
  logout: () => void;          // Agrega logout si lo necesitas
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem('authToken', user.accessToken); // Guarda el token en localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};
