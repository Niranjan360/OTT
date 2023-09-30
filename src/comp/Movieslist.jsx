import { Link } from "react-router-dom";

const Movieslist = ({movies , title}) => {
    return ( 
        <div className="movies-list">

                            <h1 className="title">{title}</h1>

                            {
                                movies.map((movie)=>{
                                    return(
                                        <div className="movie" key={movie.movieName}>
                                            <Link to={`/details/${movie.id}`}>
                                                <img src={movie.poster} alt=""/>
                                                <h1>Moviename : {movie.movieName} </h1>
                                                <h4>Genre : {movie.genre.toString()} </h4>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
        </div>
    );
}

export default Movieslist;














   {/*                                             
                                            <div className="trailer-link">
                                                <Link to={`/details/${movie.id}`}>
                                                    <a href={movie.trailer} target="_blank"> Click to watch trailer </a>
                                                </Link>
                                            </div> */}

                                            