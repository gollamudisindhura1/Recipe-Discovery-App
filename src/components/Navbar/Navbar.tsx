import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <h2>🥗 RECIPE APP 🍱</h2>
            <div>
                <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/favorites">Favorites</Link>

            </div>
        </nav>
    )
}