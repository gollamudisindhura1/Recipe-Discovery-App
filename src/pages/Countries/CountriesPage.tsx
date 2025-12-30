import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./countries.css";


type Country = {
  strArea: string;
};

type CountriesResponse = {
  meals: Country[];
};

export default function CountriesPage() {
  const { data, loading } = useFetch<CountriesResponse>(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  if (loading) return <p>Loading countries...</p>;
  //if (Error) return <p>{Error}</p>;
  if (!data) return null;

  return (
    <div className="countries fade-in">
      <h2>Browse Recipes by Country</h2>

      <div className="countries-grid">
        {data.meals.map((country) => (
          <Link
            key={country.strArea}
            to={`/country/${country.strArea}`}
            className="country-card"
          >
            {country.strArea}
          </Link>
        ))}
      </div>
    </div>
  );
}
