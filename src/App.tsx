import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CountriesPage from "./pages/Countries/CountriesPage";
import RecipesByCountry from "./pages/RecipesByCountry/RecipesByCountry";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import FavoritesPage from "./pages/Favorites/FavoritesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:country" element={<RecipesByCountry />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
