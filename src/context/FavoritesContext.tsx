import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FavoritesContextType = {
    favorites: string[]
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null > (null)

export function FavoritesProvider({children}: {children: React.ReactNode}){
    const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", [])
    const addFavorite = (id: string) =>
        setFavorites([...favorites, id])
    const removeFavorite = (id: string) =>
        setFavorites(favorites.filter(f => f !== id))
     const isFavorite = (id: string) =>
    favorites.includes(id);

     return (
        <FavoritesContext.Provider

        value = {{favorites, addFavorite, removeFavorite, isFavorite}}
        >
           {children}
        </FavoritesContext.Provider>
     )

}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites(){
    const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside provider");
  return ctx;

}