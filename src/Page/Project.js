import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
import TodoReducer from "../REDUX/reducer/TodoReducer";
import { useEffect } from "react";
import { Button, CardActions, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";
import ProjectAdd from "./ProjectAdd";
import { cartAdd } from "../REDUX/actions/Index";
import { Card, Typography } from "antd";
import Swal from "sweetalert2";
export default function Project({ editFunc, deletFunc }) {
  const { list, cart } = useSelector((state) => state.TodoReducer);
  useEffect(() => {}, [list]);
  const dispatch = useDispatch();
  const cartFunc = (elem) => {
    dispatch(cartAdd(elem));
    if (cart.filter((val) => val.id === elem.id).length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "data save to cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        text: "Bu malumot cartda mavjud",
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ textTransform: "capitalize" }}>
              <TableCell align="center">№</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">about</TableCell>
              <TableCell align="center">narx</TableCell>
              <TableCell align="center">rasm</TableCell>
              <TableCell colSpan={2} align="center">
                action
              </TableCell>
              <TableCell align="center">cart</TableCell>
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
                  <TableCell align="center">
                    {row.about.trim().length > 50
                      ? row.about.trim().slice(0, 50) + '...'
                      : row.about.trim()}
                  </TableCell>
                  <TableCell align="center">{row.narx}</TableCell>
                  <TableCell align="center">
                    <img
                      src={row?.img}
                      alt={row.name}
                      style={{ width: "100px", borderRadius: "10px" }}
                    />
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
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => cartFunc(row)}>
                      Cart
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
      </TableContainer> */}

      <div className="cardBody">
        {list.length > 0 ? (
          list.map((item) => (
            <Card className="cardItem" key={item.id}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  <h3>{item.name}</h3>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.about}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => editFunc(item)}>
                  edit
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  style={{ background: "red" }}
                  onClick={() => deletFunc(item.id)}
                >
                  delete
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  onClick={() => cartFunc(item)}
                >
                  cart
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <h1>
            <i>Malumot yo'q...</i>
          </h1>
        )}
      </div>
    </div>
  );
}
