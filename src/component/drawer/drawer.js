import React, { useState } from "react";
import style from "./style.module.css";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import StreetviewIcon from "@mui/icons-material/Streetview";
import { useHistory, useParams } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(0);
  let history = useHistory();
  const { id } = useParams();

  return (
    <div className={style.continer}>
      <div
        onClick={() => {
          // setActive(0);
          history.push("/home/1");
        }}
        className={style.continerItem}
        style={{
          backgroundColor: id == 1 && "#fff",
          borderTopRightRadius: id == 1 && 30,
        }}
      >
        <div
          className={style.continerAddIcon}
          style={{ backgroundColor: id == 1 && "#18408D" }}
        >
          <AddIcon style={{ color: id == 1 ? "#fff" : "#18408D" }} />
        </div>
        <h1 style={{ color: id == 1 && "#18408D" }}>Create New</h1>
      </div>

      <div
        onClick={() => {
          // setActive(1);
          history.push("/home/2");
        }}
        className={style.continerItem}
        style={{
          backgroundColor: id == 2 && "#fff",
          borderTopRightRadius: id == 2 && 30,
        }}
      >
        <div
          className={style.continerAddIcon}
          style={{ backgroundColor: id == 2 && "#18408D" }}
        >
          <StreetviewIcon style={{ color: id == 2 ? "#fff" : "#18408D" }} />
        </div>
        <h1 style={{ color: id == 2 && "#18408D" }}>My Projects</h1>
      </div>
      <div
        onClick={() => {
          // setActive(2);
          history.push("/home/3");
        }}
        className={style.continerItem}
        style={{
          backgroundColor: id == 3 && "#fff",
          borderTopRightRadius: id == 3 && 30,
        }}
      >
        <GridViewIcon
          style={{ fontSize: 50, color: id == 3 ? "#18408D" : "#fff" }}
        />
        <h1 style={{ color: id == 3 && "#18408D" }}>Stats</h1>
      </div>
    </div>
  );
}
