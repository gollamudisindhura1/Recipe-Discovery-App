const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

export const endpoints = {
    categories: `${BASE_URL}/categories.php`,
     byCategory: (category: string) =>
    `${BASE_URL}/filter.php?c=${category}`,
  byId: (id: string) =>
    `${BASE_URL}/lookup.php?i=${id}`,
  search: (query: string) =>
    `${BASE_URL}/search.php?s=${query}`,
};