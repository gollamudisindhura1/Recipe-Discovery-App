import { useEffect, useState } from "react";
import { useFavorites } from "../../context/FavoritesProvider";
//import { useFetch } from "../../hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./favorites.css";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type MealDetailResponse = {
  meals: Meal[] | null 
}

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteMeals, setFavoriteMeals] = useState<Meal []>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (favorites.length === 0) {
      setFavoriteMeals([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      setLoading(true);
      setError(null);

      try {
        const mealPromises = favorites.map((id) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) =>
            res.json()
          )
        );

        const results = await Promise.all(mealPromises);

        // Extract the actual meal object from each response
        const meals = results
          .map((result: MealDetailResponse) => result.meals?.[0])
          .filter(Boolean) as Meal[]; // Remove any nulls

        setFavoriteMeals(meals);
      } catch {
        setError("Failed to load favorite recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]); // Re-run if favorites change

  // Loading state
  if (loading) {
    return (
      <div className="favorites-loading">
        <p>Loading your favorite recipes...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="favorites fade-in">
      <h2>Your Favorite Recipes ❤️</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">
          No favorites yet. Explore recipes and click the heart to save them here!
        </p>
      ) : favoriteMeals.length === 0 ? (
        <p>Some favorites could not be loaded.</p>
      ) : (
        <div className="favorites-grid">
          {favoriteMeals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
