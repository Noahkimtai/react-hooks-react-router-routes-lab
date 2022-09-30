import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return ( 
  <div className="navbar">{/*{code here}*/}
    <NavLink to='/' exact>Home</NavLink>
    <NavLink to='/Movies' exact>Movies</NavLink>
    <NavLink to='/Directors' exact> Directors</NavLink>
    <NavLink to='/Actors' exact> Actors</NavLink>
  </div>);
}

export default NavBar;
