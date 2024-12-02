// src/context/AuthContext.tsx
interface User {
  username: string;
  accessToken: string;
}

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
