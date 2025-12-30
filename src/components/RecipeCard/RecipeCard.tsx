import { Link } from "react-router-dom";
import "./recipeCard.css";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
export default function RecipeCard({ meal }: {meal: Meal}) {
  return (

    <div className="recipe-card">
     <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h4 className="recipe-title">{meal.strMeal}</h4>
      <Link to={`/recipe/${meal.idMeal}`} className="view-btn">
        View Recipe
      </Link>
    </div>
    
  );
}
