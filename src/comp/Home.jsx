import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";
import Navbar from "./Navbar";

const Home = () => {''

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return(res.json() );})
            .then((data)=>{
                console.log(data);
                setMovies(data);
                setPending(false)
            })
            .catch((err)=>{setError(err.message);})
        } , 1000)
    } ,[] )


    return ( 
        <>
        <Navbar/>

        <div className="home">
            
            <hr />

            {error && <h1>{error}</h1>}

            {pending && <div className="loader"> </div>}

            {movies && <Movieslist movies={movies} title="All movies"/>}

            {movies && <Movieslist movies={movies} title="Action movies"/>}

            {movies && <Movieslist movies={movies} title="2023 movies"/>}

            {movies && <Movieslist movies={movies} title="hollywood movies"/>}

            {movies && <Movieslist movies={movies} title="kannada movies"/>}

            {movies && <Movieslist movies={movies} title="All movies"/>}


            {/* {movies && <Movieslist movies={movies.filter((movie)=>{ return movie.genre.includes("Action")})} title="Action movies"/>}

            {movies && <Movieslist movies={movies.filter((movie)=>{return movie.genre.includes("Adventure")})} title="Adventure movies"/>} */}


        </div>
        </>
    );
}
export default Home;