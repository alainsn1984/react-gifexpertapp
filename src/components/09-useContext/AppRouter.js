import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScream } from "./AboutScream";
import { HomeScream } from "./HomeScream";
import { LoginScream } from "./LoginScream";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/about" component={AboutScream} />
            <Route exact path="/login" component={LoginScream} />
            <Route exact path="/" component={HomeScream} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
