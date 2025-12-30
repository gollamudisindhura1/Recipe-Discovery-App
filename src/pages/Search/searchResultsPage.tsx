import { useSearchParams } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard"; 
import { useFetch } from "../../hooks/useFetch";
import "./search.css"; 

// Type for TheMealDB search response
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type SearchResponse = {
  meals: Meal[] | null;
};

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch<SearchResponse>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
  );

  if (!query) {
    return <p className="no-query">Please enter a search term.</p>;
  }

  if (loading) {
    return <p className="loading">Searching for "{query}"...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  if (!data?.meals || data.meals.length === 0) {
    return (
      <p className="no-results">
        No recipes found for "<strong>{query}</strong>". Try a different term!
      </p>
    );
  }
  return (
    <div className="search-results fade-in">
      <h2>Search Results for "{query}"</h2>
      <p className="results-count">{data.meals.length} recipes found</p>

      <div className="results-grid">
        {data.meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}