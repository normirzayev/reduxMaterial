import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import notFound from "../details/img/404(1).jpg";
const NotFound = () => {
  let back = useNavigate();

  return (
    <div className="notFound">
      <div className="notFoundBox">
        <figure>
          <img src={notFound} alt="" />
        </figure>
        <h1>not Found !?</h1>
        <Button onClick={() => back("/")} variant="contained">
          <KeyboardReturnIcon />
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
