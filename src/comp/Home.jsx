import { useEffect, useState } from "react";

const Home = () => {

    const [movies, setMovies] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return(res.json() );})
            .then((data)=>{
                console.log(data);
                setMovies(data);
            })
        } , 3000)
    } ,[] )


    return ( 
        <div className="home">
            <h1>ALL MOVIES</h1>
            <hr />

            {movies==null  && <h1>Loading ..................</h1>}

            {movies && <div className="movies-list">
                            {
                                movies.map((movie)=>{
                                    return(
                                        <div className="movie">
                                            <h1>Moviename : {movie.movieName} </h1>
                                            <img src={movie.poster} alt="" width="200px" height="300px"/>
                                        </div>
                                    )
                                })
                            }
                        </div>}

        </div>
    );
}
export default Home;