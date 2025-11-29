import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

type RequestInterceptor = Parameters<
  typeof api.interceptors.request.use
>[0];

api.interceptors.request.use(
  ((config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }) as RequestInterceptor,
  (error) => Promise.reject(error)
);
