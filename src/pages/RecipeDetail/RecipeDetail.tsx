import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useFavorites } from "../../context/FavoritesProvider";
import "./recipeDetail.css";



type MealDetail = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

type ApiResponse = {
  meals: MealDetail[] | null;
};

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const { data, loading, error } = useFetch<ApiResponse>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!data || !data.meals) return <p>Recipe not found</p>;

  const meal = data.meals[0];

  return (
    <div className="recipe-detail fade-in">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <button
        onClick={() =>
          isFavorite(meal.idMeal)
            ? removeFavorite(meal.idMeal)
            : addFavorite(meal.idMeal)
        }
      >
        {isFavorite(meal.idMeal) ? "Remove Favorite" : "Add to Favorites"}
      </button>

      <p>{meal.strInstructions}</p>
    </div>
  );
}
