import React from "react";
import style from "./style.module.css";
import Card from "../../../component/cardProject/card";

export default function MyProject() {
  return (
    <div className={style.continer}>
      <div className={style.divProjects}>
        <h1>My NFT</h1>
      </div>
      <Card />
    </div>
  );
}
