import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to={"/"} >about</NavLink>
          </li>
          <li>
            <NavLink to={"/resume"}>resume</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>blog</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
