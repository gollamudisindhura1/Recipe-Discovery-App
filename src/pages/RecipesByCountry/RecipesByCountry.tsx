import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./recipeByCountry.css";


type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type ApiResponse = {
  meals: Meal[] | null;
};

export default function RecipesByCountryPage() {
  const { country } = useParams<{ country: string }>();

  const { data, loading, error } = useFetch<ApiResponse>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  );

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;
  if (!data || !data.meals) return <p>No recipes found.</p>;

  return (
    <div className="recipes fade-in">
      <h2>{country} Recipes</h2>

      <div className="recipes-grid">
        {data.meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}



