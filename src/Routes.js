import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./screens/login/login.screen";
import Home from "./screens/home/home.screen";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  componentDidMount = async () => {};
  render() {
    return (
      <BrowserRouter basename="/nftcreator">
        <Switch>
          <Route path={"/home/:id"} component={Home} />
          <Route path={"/"} component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
