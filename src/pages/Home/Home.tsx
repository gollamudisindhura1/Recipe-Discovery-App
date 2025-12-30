import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div className="home fade-in">
      <div className="hero-content">
      <h1>Welcome to Recipe Discovery App</h1>
      <p>Explore delicious recipes from around the world, search by name or ingredient, and save your favorites!</p>
      <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search by Recipes... (e.g., Biryani, Pasta)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
{/* 
      <div className="home-links">
        <Link to="/countries" className="home-btn primary">
          Browse by Country
        </Link>

        {/* <Link to="/search" className="home-btn secondary">
          Search Recipes
        </Link> */}

        {/* <Link to="/favorites" className="home-btn outline">
            My Favorites
          </Link>
      </div>  */}
      </div>
    </div>
  );
}
