import React from "react";
import { Switch, Route } from "react-router-dom";
import AllBots from "./AllBots";
import BotDetails from "./BotDetails";

const Bot = () => (
  <Switch>
    <Route exact path="/bot" component={AllBots} />
    <Route path="/bot/:botId" component={BotDetails} />
  </Switch>
);

export default Bot;
