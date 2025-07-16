import React from "react";
import './App.css'
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/logout">LogOut</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}

export default Nav;