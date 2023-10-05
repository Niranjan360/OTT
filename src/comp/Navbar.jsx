import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link to="/home">Home</Link>
            </div>

            <div className="searchbar">
                <Link to="/search"><button>🔍 </button></Link>
                
            </div>

            <div className="nav-links">
                <Link to="/add">Add movie</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    );
}
export default Navbar;