import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Profile = () => {

    let[currentUser , setcurrentUser] = useState(null);
    let[popup , setpopup] = useState(false);
    let old = useRef();
    let newPass = useRef();
    let rePass = useRef();


    let navigate = useNavigate();

    useEffect(()=>{
        let currentUser = localStorage.getItem("currentUser");
        setcurrentUser(JSON.parse(currentUser));
    } , [])

    let logout = ()=>{
        navigate("/login");
        localStorage.removeItem("currentUser");
    }

    let resetPassword = ()=>{
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));

        let oldPassword = old.current.value;
        let newPassword = newPass.current.value;
        let rePassword = rePass.current.value;

        if(oldPassword==newPassword)
        {
            toast.error("New password can't be same as old password")
        }
        else if(newPassword!=rePassword)
        {
            toast.error("password missmatch")
        }
        else if(currentUser.password != oldPassword)
        {
            toast.warning("Invalid old password !!!")
        }
        else{
            let updatedUser = {...currentUser , password : newPassword};


            async function x()
            {
                let y = await fetch("http://localhost:5000/users/"+currentUser.id , 
                                                                {
                                                                    method :  "PUT",
                                                                    headers:{"Content-Type" : "application/json"},
                                                                    body : JSON.stringify(updatedUser)
                                                                })

                let data = await y.json();
                console.log(data);

                let action = confirm("Do you want stay ?");
                if(action)
                {
                    localStorage.setItem("currentUser" , JSON.stringify(data));
                }
                else{
                    logout();
                }
            }
            x()
            
        }

    }

    return ( 
        <>
            <Navbar/>
            {currentUser && <div className="profile">
                                <h1>Profile comp</h1>
                                <h1>{currentUser.name}</h1>
                                <button onClick={logout}>logout</button>
                                <button onClick={()=>{setpopup(true)}}>Reset password</button>

                            </div>}

            {popup && <div id="popup">
                <div className="cont">
                    <h3>Reset password</h3>
                    <hr />
                    <input type="text" placeholder="Old password" ref={old}/>
                    <input type="text" placeholder="New password" ref={newPass}/>
                    <input type="text" placeholder="Re-enter password" ref={rePass}/>
                    <button onClick={resetPassword}>Reset</button>

                    <button onClick={()=>{setpopup(false)}}> ❌  </button>
                </div>

            </div>}

            <ToastContainer />
        </>
    );
}

export default Profile;