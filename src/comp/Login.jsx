import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let userRef = useRef();
    let passworddata=useRef();

    let navigate = useNavigate();

    let handlelogin = (e)=>{
        e.preventDefault();

        fetch("http://localhost:5000/users")
        .then((res)=>{return res.json()})
        .then((data)=>{
            //make use of data
            let user = data.find((user)=>{ return user.email==userRef.current.value ||  user.phone==userRef.current.value })

            if(user==undefined)
            {
                alert("User not found please signup or give valid data")
            }
            else if(user.password!=passworddata.current.value)
            {
                alert("Invalid password !!")
            }
            else
            {
                alert("Login successfull");
                localStorage.setItem('currentUser', JSON.stringify(user));
                navigate("/home");
            }
        })


    }



    return (
        <div className="login-cont">
        <h2>Login</h2>
            <form onSubmit={handlelogin}>
                <input type="text" placeholder='EMAIL or PHONE NO' ref={userRef} />
                <input type="text" placeholder='PASSWORD' ref={passworddata}/>
                <a href="">Forgot password?</a>
                <input type="submit" value="Submit" />
                <section>Not a member?<Link to='/'>SignUp</Link></section>
            </form>
        </div>
    )
}

export default Login
