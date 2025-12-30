import { Link, useLocation } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){
    const location = useLocation();
    return(
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
               <h2>🍴 Recipe Discovery 🌍</h2>
            </Link>
            <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""} 
        >
          Home
        </Link>
        <Link 
          to="/countries" 
          className={location.pathname === "/countries" ? "active" : ""}
        >
          Countries
        </Link>
        <Link 
          to="/favorites" 
          className={location.pathname.startsWith("/favorites") ? "active" : ""} 
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}
        