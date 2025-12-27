import { Link } from "react-router-dom";
import "./recipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card slide-up">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
    </Link>
  );
}
