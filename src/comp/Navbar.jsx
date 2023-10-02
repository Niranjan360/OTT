import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link to="/home">Home</Link>
            </div>

            <div className="searchbar">
                <input type="text" placeholder="Search for a movie" />
                <button>🔍 </button>
            </div>

            <div className="nav-links">
                <Link to="/add">Add movie</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    );
}
export default Navbar;