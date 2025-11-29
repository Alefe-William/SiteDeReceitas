import { api } from "./Api";

export const getPopularRecipes = async () => {
  const response = await api.get("/recipes/popular");
  return response.data;
};

export const getQuickRecipes = async () => {
  const response = await api.get("/recipes/quick");
  return response.data;
};

export const getRecipeById = async (id: string) => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};

export async function getRecipesByCategory(category: string) {
  const response = await api.get(`/recipes/category/${category}`);
  return response.data;
}
