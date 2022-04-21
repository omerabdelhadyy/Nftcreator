import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./style.module.css";

function createData(name, calories, fat, carbs, protein, image) {
  return { name, calories, fat, carbs, protein, image };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "30,200,55",
    6.0,
    24,
    4.0,
    "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631"
  ),
  createData(
    "Ice cream sandwich",
    "50,254,39",
    9.0,
    37,
    4.3,
    "https://www.cnet.com/a/img/resize/0b8aea076935c5f2921df9bb329af25b16277292/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&width=940"
  ),
  createData(
    "Frozen yoghurt",
    "13,923,2",
    16.0,
    24,
    6.0,
    "https://www.cnet.com/a/img/resize/180806b9e13bc1d1750aeef34e28f173dc2ee7e3/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=940"
  ),
  createData(
    "Ice cream sandwich",
    "6,200,25",
    3.7,
    67,
    4.3,
    "https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg"
  ),
  createData(
    "Frozen yoghurt",
    "4,470,22",
    16.0,
    49,
    3.9,
    "https://static.ffx.io/images/$zoom_0.473%2C$multiply_0.8862%2C$ratio_1%2C$width_378%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/d22d363b42bd80403a8a0847e21360116d15edfa"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ fontSize: 30, fontWeight: "bold" }}
              className={style.title}
            >
              Collection
            </TableCell>
            <TableCell
              style={{ fontSize: 30, fontWeight: "bold" }}
              align="center"
              className={style.title}
            >
              Volume
            </TableCell>
            <TableCell
              style={{ fontSize: 30, fontWeight: "bold" }}
              align="center"
              className={style.title}
            >
              Floor Price
            </TableCell>
            <TableCell
              style={{ fontSize: 30, fontWeight: "bold" }}
              align="center"
              className={style.title}
            >
              Owners
            </TableCell>
            <TableCell
              style={{ fontSize: 30, fontWeight: "bold" }}
              align="center"
              className={style.title}
            >
              Items
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                // className={style.tableRow}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1>{index + 1}</h1>
                <img src={row.image} className={style.image} />
                <h2 style={{ fontSize: 30 }}>{row.name}</h2>
              </TableCell>
              <TableCell
                style={{ fontSize: 30, fontWeight: "bold" }}
                className={style.value}
                align="center"
              >
                {row.calories}
              </TableCell>
              <TableCell
                style={{ fontSize: 30, fontWeight: "bold" }}
                className={style.value}
                align="center"
              >
                {row.fat}
              </TableCell>
              <TableCell
                style={{ fontSize: 30, fontWeight: "bold" }}
                className={style.value}
                align="center"
              >
                {row.carbs}
              </TableCell>
              <TableCell
                style={{ fontSize: 30, fontWeight: "bold" }}
                className={style.value}
                align="center"
              >
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
