import { createContext} from "react";

 //This defines what data and functions
 //our Favorites Context will expose globally


export type FavoritesContextType = {
    favorites: string[]
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | null > (null)

