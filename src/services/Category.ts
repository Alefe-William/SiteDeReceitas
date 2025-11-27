import { api } from "./Api";

export const buscarCategoriasAPI = async () => {
  const response = await api.get("/recipes/quick");
  return response.data.recipes;
};