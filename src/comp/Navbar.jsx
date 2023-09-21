const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">Home</div>

            <div className="searchbar">
                <input type="text" placeholder="Search for a movie" />
                <button>🔍 </button>
            </div>

            <div className="nav-links">
                <a href="">Add movie</a>
                <a href="">Profile</a>
            </div>
        </nav>
    );
}
export default Navbar;