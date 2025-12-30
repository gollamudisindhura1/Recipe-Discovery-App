const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

// get meals by country

export const fetchMealsByCountry = async (country:string) => {
  const res = await fetch (`${BASE_URL}/filter.php?a=${country}`)
  return res.json
}

// get single recipe details
export const fetchMealDetails = async (id: string) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  return res.json();
};

// search meals
export const searchMeals = async (query: string) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  return res.json();
};