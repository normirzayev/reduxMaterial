import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Project from "./pages/Project";

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <h1>
            Lo<span>go</span>
          </h1>
          <ul>
            <li>
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}
