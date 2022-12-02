import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Home from "../Page/Home";
import Project from "../Page/Project";
import ProjectAdd from "../Page/ProjectAdd";
import Karzinka from "../Page/Karzinka";
import NotFound from "../Page/NotFound";
import CategoryIcon from "@mui/icons-material/Category";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PinIcon from "@mui/icons-material/Pin";
const Navbar = () => {
  const [navClose, setNavClose] = useState(
    localStorage.getItem("navbar") || "false"
  );
  function localFunc() {
    setNavClose(localStorage.getItem("navbar"));
  }

  function navcloseFunc() {
    if (localStorage.getItem("navbar") === "true") {
      localStorage.setItem("navbar", "false");
    } else {
      localStorage.setItem("navbar", "true");
    }
    localFunc();
  }

  return (
    <div className="siteBar">
      <nav className={navClose === "false" ? "" : "navActive"}>
        <NavLink to="/" className="logo">
          <h1>
            <PinIcon className="icon" /> {navClose === "false" ? "LOGO" : ""}
          </h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/projectAdd">
              <DataSaverOnIcon className="icon" />
              {navClose === "false" ? "project add" : ""}
            </NavLink>
          </li>
          <li>
            <NavLink to="/karzinka">
              <AddShoppingCartIcon className="icon" />
              {navClose === "false" ? "karzinka" : ""}
            </NavLink>
          </li>
        </ul>
        <div className="navClose">
          <Button variant="contained" onClick={navcloseFunc}>
            <NavigateNextIcon
              className={
                navClose === "false"
                  ? "close_iconFalse close_icon"
                  : "close_icon"
              }
            />
          </Button>
        </div>
      </nav>
      <div
        className={
          navClose === "false" ? "components" : " components navActive"
        }
      >
        <div className="navbar">
          <h1>sign in</h1>
          <h1>sign up</h1>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectAdd" element={<ProjectAdd />} />
            <Route path="/karzinka" element={<Karzinka />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
