import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home fade-in">
      <h1>Recipe Discovery App</h1>
      <p>Explore recipes by country, search meals, and save your favorites.</p>

      <div className="home-links">
        <Link to="/countries" className="home-btn">
          Browse by Country
        </Link>

        <Link to="/search" className="home-btn secondary">
          Search Recipes
        </Link>
      </div>
    </div>
  );
}
