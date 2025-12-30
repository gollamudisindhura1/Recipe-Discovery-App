import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./countries.css";


type Country = {
  strArea: string;
};

type CountriesResponse = {
  meals: Country[] | null;
};

export default function CountriesPage() {
  const { data, loading, error} = useFetch<CountriesResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  if (loading) {
    return (
      <div className="countries-loading">
        <p>Loading countries...</p>
        <div className="spinner" /> 
      </div>
    );
  }
  if (error) return <p className="error">Error loading countries: {error}</p>;
  if (!data || !data.meals || data.meals.length === 0) {
    return <p>No countries found.</p>;
  }
  return (
    <div className="countries fade-in">
      <h2>Browse Recipes by Country</h2>
      <p className="subtitle">Discover authentic dishes from around the world</p>

      <div className="countries-grid">
        {data.meals.map((country) => (
          <Link
            key={country.strArea}
            to={`/country/${country.strArea}`}
            className="country-card"
          >
            {/*  Country flag using flagcdn.com */}
            <img
              src={`https://flagcdn.com/144x108/${country.strArea
                .toLowerCase()
                .substring(0, 2)}.png`}
              alt={`${country.strArea} flag`}
              className="country-flag"
              onError={(e) => {
                // Fallback if flag not found (ex. "Unknown")
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/*Country name below flag */}
            <span className="country-name">{country.strArea}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}