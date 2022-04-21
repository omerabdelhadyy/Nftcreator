import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
      <BrowserRouter>
        <Switch>
          <Route path={"/home/:id"} component={Home} />
          <Route path={"/"} component={Login} />
        </Switch>
        {/* {this.state.redirect && <Redirect to={"/login"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
