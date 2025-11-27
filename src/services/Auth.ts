import { api } from "./Api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data; 
};

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
  });

  return response.data; 
};

export const getLoggedUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
