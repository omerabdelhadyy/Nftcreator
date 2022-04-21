import React, { useEffect } from "react";
import style from "./style.module.css";
import Header from "../../component/header/header";
import Drawer from "../../component/drawer/drawer";
import MyProject from "./myProject/myProject";
import Create from "./create/create.screen";
import Stats from "./stats/stats.screen";
import { useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  useEffect(() => {
    // console.log("id", id);
  }, id);

  return (
    <div>
      <Header />
      <Drawer />
      <div className={style.contnet}>
        {id == 1 ? (
          <Create />
        ) : id == 2 ? (
          <MyProject />
        ) : id == 3 ? (
          <Stats />
        ) : null}
      </div>
    </div>
  );
}
