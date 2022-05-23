import React from "react";
import style from "./style.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <div className={style.continer}>
      <h1>
        NFT MARKET<span style={{ fontWeight: "400" }}>PLASE</span>
      </h1>
      <div className={style.continerEmail}>
        <PersonIcon style={{ fontSize: 25 }} />
        <h1>omerabdelhady62@gmail.com</h1>
        <ArrowDropDownIcon style={{ fontSize: 25, color: "#666" }} />
      </div>
    </div>
  );
}
