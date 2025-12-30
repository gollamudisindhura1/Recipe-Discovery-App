import { useFavorites } from "../../context/FavoritesProvider";
import "./favorites.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites fade-in">
      <h2>Your Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some ❤️</p>
      ) : (
        <ul>
          {favorites.map((id) => (
            <li key={id}>Recipe ID: {id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
