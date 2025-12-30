import { Link } from "react-router-dom";
import "./recipeCard.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RecipeCard({ meal }: any) {
  return (

    <div className="card">
      <img src={meal.strMealThumb} />
      <h3>{meal.strMeal}</h3>
      <Link to={`/recipe/${meal.idMeal}`}>View</Link>
    </div>
    
  );
}
