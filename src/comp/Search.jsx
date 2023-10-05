import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Movieslist from "./Movieslist";

const Search = () => {

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    const [keyword, setKeyword] = useState("");


    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return(res.json());})
            .then((data)=>{
                setMovies(data)
            })
            .catch((err)=>{setError(err.message);})
        } , 100)
    } ,[] )

    return ( <>
            <Navbar/>

            <h1>Search for a movie</h1>
            <input type="text" placeholder="search for a movie" value={keyword} onChange={(e)=>{ setKeyword(e.target.value) }} />

            {movies && !keyword && <Movieslist movies={movies} title="Popular searches" />}

            {movies && keyword && <Movieslist movies={movies.filter((mov)=>{ return mov.movieName.toLowerCase().includes(keyword.toLowerCase()) })} title="Result for searched ketword" />}

            {/* {movies && keyword && <Movieslist movies={movies.filter((mov)=>{ return mov.movieName.toLowerCase().startsWith(keyword.toLowerCase()) })} title="Result for searched ketword" />} */}


    </> );
}
export default Search;