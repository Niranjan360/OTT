import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

const Update = () => {

    let[g , setG] = useState(null);

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let rating = useRef();
    let cast = useRef();
    let poster = useRef();
    let banner = useRef();
    let trailer = useRef();
    let synop = useRef();

    let nav = useNavigate();
    let{id} = useParams();

    useEffect(()=>{
        fetch("http://localhost:4000/movies/"+id)
        .then((res)=>{ return(res.json() );})
        .then((data)=>{
            moviename.current.value = data.movieName;
            hero.current.value = data.hero;
            heroine.current.value = data.heroine;
            rating.current.value = data.rating;
            director.current.value = data.director;
            cast.current.value = data.casting.toString();
            trailer.current.value = data.trailer;
            banner.current.value = data.banner;
            poster.current.value = data.poster;
            synop.current.value = data.synopsis;

            setG([...data.genre])
        })
    } ,[] )


    let updateMovie = (e)=>{
        e.preventDefault();

        // create a new movie object
        let updatedMovie = {
                "synopsis": synop.current.value ,
                "poster": poster.current.value,
                "banner": banner.current.value ,
                "movieName": moviename.current.value,
                "hero": hero.current.value,
                "heroine": heroine.current.value,
                "director": director.current.value,
                "rating": rating.current.value,
                "genre": [],
                "casting": cast.current.value.split(","),
                "trailer": trailer.current.value
        }

        let genre = document.getElementsByName("genre");
        genre.forEach((checkbox)=>{
            if(checkbox.checked)
            {
                updatedMovie.genre.push(checkbox.nextElementSibling.textContent);
            }
        })

        if(updatedMovie.genre.length==0)
        {
            updatedMovie.genre = [...g];
        }



        // post that object to db

        fetch("http://localhost:4000/movies/"+id , 
                                                {
                                                    method : "PUT",
                                                    headers:{'Content-Type': 'application/json'},
                                                    body: JSON.stringify(updatedMovie)
                                                }
        )
        .then(()=>{
            // navigate to different comp

            toast.success("Movie has been updated successfully");
            setTimeout(()=>{nav("/home")} , 2000)
        })

    }


    return ( 
        <>
        <Navbar/>
        <div className="add-movie">
            <h1>Update movie</h1>
            <form onSubmit={updateMovie}>
                <input type="text" placeholder="Moviename" ref={moviename} />
                <input type="text" placeholder="Hero" ref={hero}/>
                <input type="text" placeholder="Heroine" ref={heroine}/>
                <input type="text" placeholder="Director" ref={director}/>
                <input type="number" placeholder="Rating" min="1" max="5" step="0.1" ref={rating} />
                <fieldset>
                    <legend>Select genre</legend>

                    <div>
                        <input type="checkbox" name="genre" id="a" value="Action"/>  <label for="a">Action</label>
                        <input type="checkbox" name="genre" id="b" value="Adventure"/>  <label for="b">Adventure</label>
                        <input type="checkbox" name="genre" id="c" />  <label for="c">Drama</label>
                        <input type="checkbox" name="genre" id="d" />  <label for="d">Romace</label>
                        <input type="checkbox" name="genre" id="e" />  <label for="e">Comedy</label>
                        <input type="checkbox" name="genre" id="f" />  <label for="f">Thriller</label>
                        <input type="checkbox" name="genre" id="g" />  <label for="g">Suspense</label>
                        <input type="checkbox" name="genre" id="h" />  <label for="h">Horror</label>
                        <input type="checkbox" name="genre" id="i" />  <label for="i">Sci-fi</label> 
                    </div>                  
                </fieldset>
                <input type="text" placeholder="Cast" ref={cast} />
                <input type="url" placeholder="Poster" ref={poster} />
                <input type="url" placeholder="Trailer" ref={trailer}/>
                <input type="url" placeholder="Banner" ref={banner}/>
                <textarea placeholder="Synopsis" cols="55" rows="5" ref={synop}></textarea>

                <input type="submit" value="Update movie"/>
            </form>
            <ToastContainer />
        </div>
        </>
    );
}

export default Update;