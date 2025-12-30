import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);