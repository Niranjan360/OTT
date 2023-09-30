import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Moviedetails = () => {

    let {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    let navigate = useNavigate()


    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{ return(res.json() );})
            .then((data)=>{
                console.log(data);
                setMovie(data);
                setPending(false);
            })
            .catch((err)=>{setError(err.message);})
        } , 5000)
    } ,[] )


    let deleteMovie = ()=>{

        if(confirm("are yyou sure ??"))
        {
            fetch("http://localhost:4000/movies/"+id , {
                method : "DELETE"
            })
            .then(()=>{
            //navigate to diiferent comp
            navigate("/");
            })
        }
    }

    return ( 
        <div className="movie-details">

            {pending && <div className="loader"> </div>}
        
            {movie && <div>
                        <img src={movie.banner} alt="" />
                        <h1>{movie.movieName}</h1>
                        <button onClick={deleteMovie}>delete movie</button>
                    </div>}
            
        </div>
    );
}
export default Moviedetails;