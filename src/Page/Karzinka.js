import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import { cartMinusFunc, cartPlusFunc, cartRemoveFunc } from "../REDUX/actions/Index";
import Swal from "sweetalert2";
const Karzinka = () => {
  const { cart } = useSelector((state) => state.TodoReducer);
  const dispatch = useDispatch();

  let cartOchirFunc = (id) => {
   
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
        dispatch(cartRemoveFunc(id))
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ textTransform: "capitalize" }}>
              <TableCell align="center">№</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">about</TableCell>
              <TableCell align="center">narx</TableCell>
              <TableCell align="center">rasm</TableCell>
              <TableCell colSpan={3} align="center">
                action
              </TableCell>
              <TableCell align="center">o'chirish</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">
                    {item.about.trim().length > 50
                      ? item.about.trim().slice(0, 50) + "..."
                      : item.about.trim()}
                  </TableCell>
                  <TableCell align="center">{item.narx}</TableCell>
                  <TableCell align="center">
                    <img
                      src={item?.img}
                      alt={item.name}
                      style={{ width: "100px", borderRadius: "10px" }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => dispatch(cartPlusFunc(item))}
                    >
                      <AddCircleIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <h3>{item.soni}</h3>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => dispatch(cartMinusFunc(item))}
                    >
                      <RemoveCircleIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ background: "red" }}
                      variant="contained"
                      onClick={() => cartOchirFunc(item.id) }
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td
                  colSpan={10}
                  style={{ padding: "25px", background: "white" }}
                >
                  <h1>
                    <i>Malumot yo'q...</i>
                  </h1>
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Karzinka;
