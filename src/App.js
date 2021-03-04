import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Educations from "./components/Educations";
import Home from "./components/Home";
import routes from "./helper/constants";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.educations}>
          <Educations />
        </Route>
        <Route path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}