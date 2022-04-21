import React, { useEffect, useState } from "react";
import Input from "../../component/textFaild";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/LockOpen";
import style from "./style.module.css";
import Button from "@mui/material/Button";
import Typical from "react-typical";

export default function Login({ history }) {
  const [typeScreen, setTypeScreen] = useState("login");
  return (
    <div className={style.continer}>
      <div className={style.leftDiv}>
        <h1>WELCOME TO</h1>
        <h2>NFT MARKETPLACE</h2>
        <p>
          Log in to get in the moment updates on the things that interst you
        </p>
        <div className={style.inputs}>
          <Input Icone={PersonOutlineIcon} placeholder="E-mail" />
          <Input Icone={LockIcon} placeholder="Password" />
          {typeScreen === "register" ? (
            <Button variant="contained" className={style.buttonSign}>
              SIGN UP
            </Button>
          ) : (
            <Button
              variant="contained"
              className={style.buttonSign}
              onClick={() => history.push("/home/1")}
            >
              SIGN IN
            </Button>
          )}
          {typeScreen === "register" ? (
            <h1>
              Already have an account ?
              <span onClick={() => setTypeScreen("login")}>Login Now</span>
            </h1>
          ) : (
            <h1>
              Don't have an account ?
              <span onClick={() => setTypeScreen("register")}>Sign Up Now</span>
            </h1>
          )}
        </div>
      </div>
      <div className={style.rightDiv}>
        <img src="https://cdn.sanity.io/images/s7xbv9bz/production/a64efd53f75ea14095de793ea5f3d4b329fcaa65-1283x715.png?w=1200&h=669&auto=format&fm=webp" />
        <h1>
          {/* <Typical
            steps={["NFT", 1000, "NFT MARKETPLACE", 50]}
            loop={1}
            wrapper="p"
          /> */}
          NFT MARKETPLACE
        </h1>
        <p>
          A non-fungible token (NFT) is a non-interchangeable unit of data
          stored on a blockchain, a form of digital ledger, that can be sold and
          traded. Types of NFT data units may be associated with digital files
          such as photos, videos, and audio.
        </p>
      </div>
    </div>
  );
}
