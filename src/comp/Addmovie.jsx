import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

const Addmovie = () => {

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


    let addNewMovie = (e)=>{
        e.preventDefault();

        // create a new movie object
        let newMovie = {
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
                newMovie.genre.push(checkbox.nextElementSibling.textContent);
            }
        })

        // post that object to db

        fetch("http://localhost:4000/movies" , 
                                                {
                                                    method : "POST",
                                                    headers:{'Content-Type': 'application/json'},
                                                    body: JSON.stringify(newMovie)
                                                }
        )
        .then(()=>{
            // navigate to different comp

            toast.success("New movie added");
            setTimeout(()=>{nav("/")} , 2000)
        })

    }


    return ( 
        <>
        <Navbar/>
        <div className="add-movie">
            <h1>Add new movie</h1>
            <form onSubmit={addNewMovie}>
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

                <input type="submit" value="Add movie"/>
            </form>
            <ToastContainer />
        </div>
        </>
    );
}

export default Addmovie;