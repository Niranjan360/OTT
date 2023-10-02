import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

    let[currentUser , setcurrentUser] = useState(null);
    let navigate = useNavigate();

    useEffect(()=>{
        let currentUser = localStorage.getItem("currentUser");
        setcurrentUser(JSON.parse(currentUser));
    } , [])

    let logout = ()=>{
        navigate("/login");
        localStorage.removeItem("currentUser");
    }

    return ( 
        <>
            <Navbar/>
            {currentUser && <div className="profile">
                                <h1>Profile comp</h1>
                                <h1>{currentUser.name}</h1>
                                <button onClick={logout}>logout</button>
                            </div>}
        </>
    );
}

export default Profile;