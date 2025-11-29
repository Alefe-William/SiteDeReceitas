import { api } from "./Api";

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  message: string;
  user?: User;
}

export type LoggedUserResponse = User;

// ---------------------- LOGIN ----------------------
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const response = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  const { token, user } = response.data;

  // 👉 SALVA O TOKEN AQUI (faltava isso!)
  localStorage.setItem("token", token);

  return user;
};

// ---------------------- REGISTER ----------------------
export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
};

// ---------------------- /AUTH/ME ----------------------
export const getLoggedUser = async (): Promise<LoggedUserResponse | null> => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const response = await api.get<LoggedUserResponse>("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
