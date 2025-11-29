import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { getLoggedUser } from "../services/Auth";
import type { User } from "../services/Auth";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const data = await getLoggedUser();
        if (active) setUser(data);
      } catch { 
        if (active) setUser(null);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => { active = false };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
