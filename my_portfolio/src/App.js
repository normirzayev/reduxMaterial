import React from "react";
import "./style.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Conatct";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import my_picture from "./detalis/img/images.jpg";

import { MdOutlineMailOutline } from "react-icons/md";
import {BsFillPhoneFill  } from "react-icons/bs";

function App() {

  const style = {
    color:"red",
    fontSize:"40px",
    backgroundColor:'blue'
  }

  return (
    <>
      <div className="container">
        <div className="site_bar">
          <figure>
            <img src={my_picture} alt="" />
          </figure>
          <h1>abduvali normirzayev</h1>
          <p>web developer</p>
          <hr />
          <div className="ijtimoiy_tarmoqlar">
            <div className="tarmoq_box">
              <MdOutlineMailOutline />
              <div>
                <h2>email</h2>
                <p>abduvalinormirzayev007@gamil.com</p>
              </div>
            </div>
            <div className="tarmoq_box">
              <BsFillPhoneFill />
              <div>
                <h2>email</h2>
                <p>abduvalinormirzayev007@gamil.com</p>
              </div>
            </div>
            <div className="tarmoq_box">
              <MdOutlineMailOutline />
              <div>
                <h2>email</h2>
                <p>abduvalinormirzayev007@gamil.com</p>
              </div>
            </div>
            <div className="tarmoq_box">
              <MdOutlineMailOutline />
              <div>
                <h2>email</h2>
                <p>abduvalinormirzayev007@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path="/" element={<About classNomi={style} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
