import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import TodoReducer from "../REDUX/reducer/TodoReducer";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import ProjectAdd from "./ProjectAdd";
import { cartAdd } from "../REDUX/actions/Index";
export default function Project({ editFunc, deletFunc }) {
  const { list } = useSelector((state) => state.TodoReducer);
  useEffect(() => {}, [list]);
  const dispatch = useDispatch();
  const cartFunc = (elem) => {
    dispatch(cartAdd(elem))
  };

  return (
    <div style={{ padding: "20px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">№</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">password</TableCell>
              <TableCell colSpan={2} align="center">
                action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length > 0 ? (
              list.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.password}</TableCell>
                  <TableCell align="center">
                    <img
                      src={row?.img}
                      alt={row.name}
                      style={{ width: "100px", borderRadius:"10px" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => cartFunc(row)}>
                      Cart
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => editFunc(row)}>
                      edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ background: "red" }}
                      variant="contained"
                      onClick={() => deletFunc(row.id)}
                    >
                      delete
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
}
