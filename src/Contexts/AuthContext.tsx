import { createContext, useEffect, useState } from "react";
import { getLoggedUser } from "../services/Auth";
import type { ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getLoggedUser();

        // Aqui, "data" é UNKNOWN até você revisar o tipo retornado pela API
        setUser(data as User);
      } catch (err: unknown) {
        // erro desconhecido → garante TS safe
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
