import React from "react";
import style from "./style.module.css";
import Soqrat from "../../assets/photos/soqrat.png";

export default function CardMyProject() {
  return (
    <div className={style.continer}>
      <div className={style.cardContent}>
        <img src={Soqrat} />
        <h1>Project 1</h1>
        <h2>Last Updated on 2:45 PM - April 13, 2022</h2>
      </div>
      <div className={style.cardContent}>
        <img src={Soqrat} />
        <h1>Project 2</h1>
        <h2>Last Updated on 2:45 PM - April 14, 2022</h2>
      </div>
      <div className={style.cardContent}>
        <img src={Soqrat} />
        <h1>Project 3</h1>
        <h2>Last Updated on 2:45 PM - April 15, 2022</h2>
      </div>
      <div className={style.cardContent}>
        <img src={Soqrat} />
        <h1>Project 4</h1>
        <h2>Last Updated on 2:45 PM - April 16, 2022</h2>
      </div>
    </div>
  );
}
