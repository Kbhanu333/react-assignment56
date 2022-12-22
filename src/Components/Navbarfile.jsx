import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbarfile = () => {
    return (
        <div>
            <NavLink to="/" className="headd" >Home</NavLink>
            <NavLink to="/Students" className="headd" >Students</NavLink>
            <NavLink to="/ContactUs" className="headd" >Contact Us</NavLink>
        </div>
    );
}

export default Navbarfile;
