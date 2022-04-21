import React from "react";
import Table from "../../../component/tableStats/tableStats";
import style from "./style.module.css";

export default function Stats() {
  return (
    <div>
      <h1 className={style.titleTop}>Top NFT</h1>
      <Table />
    </div>
  );
}
