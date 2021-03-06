import React from "react";
import { Switch, } from 'react-router-dom';
import Route from "./Route";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/Signup" component={SignUp} />

  <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
