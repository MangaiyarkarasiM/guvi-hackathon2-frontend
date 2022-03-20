import React, { useEffect, useState } from 'react';
import { Link, NavLink} from 'react-router-dom';


const navitemsadmin = [
    {
        to : "/dashboard",
        title : "Home"
    },
    {
        to : "/theaters",
        title : "Theaters"
    },
    {
        to : "/movies",
        title : "Movies"
    },
    {
        to : "/shows",
        title : "Shows"
    },
    {
        to : "/bookings",
        title : "Bookings"
    }
];

const navitems = [
    {
        to : "/dashboard",
        title : "Home"
    },
    {
        to : "/movies",
        title : "Movies"
    }
];

function Layout(props) {
    const [userID,setUserID] = useState('');
    const [role,setRole] = useState('');
    useEffect(()=>{
        const ssuser = sessionStorage.getItem('userID');
        setUserID(ssuser);
        const ssrole = sessionStorage.getItem('role');
        setRole(ssrole);
    },[])

    return (
        <div className="d-flex align-items-center justify-content-between bg-info">
            <nav className="d-flex p-3 flex-direction-column ">
            {role==='admin'? 
             navitemsadmin.map(nav => {
                return <NavLink key={nav.title} activestyle={{
                 fontWeight: "bold",
                 color: "black"
               }}
                className="mx-4 text-white" to={nav.to}>{nav.title}</NavLink>;
             }):
            navitems.map(nav => {
               return <NavLink key={nav.title} activestyle={{
                fontWeight: "bold",
                color: "black"
              }}
               className="mx-4 text-white" to={nav.to}>{nav.title}</NavLink>;
            })}
            </nav>
            <div>
                <a className="mx-4 text-white" href={`https://bookyourshow-backend.herokuapp.com/users/profile/${userID}`}>Profile</a>
            </div>
        </div>
    );
}

export default Layout;