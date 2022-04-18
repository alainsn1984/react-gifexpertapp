import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">useContext</Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
        <div className="navbar-nav">
        <NavLink exact to="/" className="nav-link"> Home </NavLink>
        <NavLink exact to="/about" className="nav-link"> About </NavLink>
        <NavLink exact to="/login" className="nav-link"> Login </NavLink>
      
        </div>
      </div>
    </nav>
  );
};
