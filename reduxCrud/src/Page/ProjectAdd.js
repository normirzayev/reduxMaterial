import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addList, delFunc, editData } from "../REDUX/actions/Index";
import Project from "./Project";
import Swal from "sweetalert2";

const ProjectAdd = () => {
  const [tableShow, setTableShow] = useState(false);

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    img: "",
  });

  const clearItem = () => {
    setInputData({
      id: "",
      name: "",
      email: "",
      password: "",
      img: "",
    });
  };

  let changeFunc = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const showFunc = () => {
    setTableShow(!tableShow);
    clearItem();
  };

  function sendFunc() {
    if (inputData.id === "") {
      dispatch(addList(inputData));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          dispatch(editData(inputData));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
    setTableShow(false);
    clearItem();
  }

  // edit function
  const editFunc = (elem) => {
    setInputData({
      id: elem.id,
      name: elem.name,
      email: elem.email,
      password: elem.password,
      img:elem.img
    });
    setTableShow(true);
  };

  // delete function
  const deletFunc = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delFunc(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="projectAdd">
      <Button
        variant="contained"
        style={{ marginBlock: "15px" }}
        onClick={showFunc}
      >
        {tableShow ? "project add" : "table"}
      </Button>

      {tableShow ? (
        <form>
          <TextField
            className="input"
            label="name"
            type="text"
            variant="outlined"
            name="name"
            value={inputData.name}
            onChange={changeFunc}
          />
          <TextField
            className="input"
            label="email"
            type="email"
            variant="outlined"
            name="email"
            value={inputData.email}
            onChange={changeFunc}
          />
          <TextField
            className="input"
            label="password"
            type="password"
            variant="outlined"
            name="password"
            value={inputData.password}
            onChange={changeFunc}
          />
          <TextField
            className="input"
            type="file"
            onInput={(e) =>
              setInputData({
                ...inputData,
                img: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
          <Button
            className="submit"
            variant="contained"
            size="large"
            style={{ padding: "8px 25px" }}
            color="success"
            onClick={sendFunc}
          >
            qo'shish
          </Button>
        </form>
      ) : (
        <Project editFunc={editFunc} deletFunc={deletFunc} />
      )}
    </div>
  );
};

export default ProjectAdd;
