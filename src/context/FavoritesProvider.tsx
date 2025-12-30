import { useContext } from "react";
import { FavoritesContext, type FavoritesContextType, type FavoritesProviderProps } from "./FavoritesContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Provides the favorites state to the entire app
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] =
    useLocalStorage<string[]>("favorites", []);

 const addFavorite = (id: string) => {
  setFavorites((prev: string[]) => 
    prev.includes(id) ? prev : [...prev, id]
  );
};

  const removeFavorite = (id: string) => {
  setFavorites((prev: string[]) => prev.filter(f => f !== id));
};

  const isFavorite = (id: string): boolean => favorites.includes(id);

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return context;
}
