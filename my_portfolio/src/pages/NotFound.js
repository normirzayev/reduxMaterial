import React from "react";
import { NavLink } from "react-router-dom";

const Not_found = () => {
  return (
    <div className="not_found">
      <h1>Topilmadi</h1>
      <NavLink to={"/"}> home </NavLink>
    </div>
  );
};

export default Not_found;
