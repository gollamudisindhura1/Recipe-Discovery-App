import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./countries.css";

export default function CountriesPage() {
  const { data, loading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="countries fade-in">
      {data.meals.map((c) => (
        <Link key={c.strArea} to={`/country/${c.strArea}`}>
          {c.strArea}
        </Link>
      ))}
    </div>
  );
}
