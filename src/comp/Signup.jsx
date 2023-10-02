import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    let namedata = useRef();
    let emaildata =useRef();
    let phonedata = useRef();
    let passworddata =useRef();

    let navigate = useNavigate();


    let handleSubmit=(e)=>{
        e.preventDefault();

    let userdata={
        // "id":,
        "name": namedata.current.value,
        "email":emaildata.current.value,
        "phone":phonedata.current.value,
        "password":passworddata.current.value
    }

    // validation logics 

    if(userdata.name="")
    {
        alert("plz enter your name");
        return;
    }




    fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(userdata)
    }
    )
    .then(()=>{
        alert("added to db");
        navigate("/login");
    })
    }
    
    return (
        <div className='signup-cont'>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='USERNAME' ref={namedata} />
            <input type="text" placeholder='EMAIL' ref={emaildata}/>
            <input type="number" placeholder='PHONE NO' ref={phonedata}/>
            <input type="text" placeholder='PASSWORD' ref={passworddata}/>
            <input type="submit" value="Submit" />
            <section >Already a member?<Link to="/login">Login now</Link></section>
        </form>
        </div>
    )
}

export default Signup