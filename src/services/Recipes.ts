import { api } from "./Api";

export const getPopularRecipes = async () => {
  const response = await api.get("/recipes/popular");
  return response.data.recipes;
};

export const getQuickRecipes = async () => {
  const response = await api.get("/recipes/quick");
  return response.data.recipes;
};
