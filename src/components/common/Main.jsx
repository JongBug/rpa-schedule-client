import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Bot from "../bots/Bot";
import Schedule from "../schedules/Schedule";
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main class="col s10">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bot" component={Bot} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
);

export default Main;
