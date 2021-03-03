import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import Favorites from "../components/Favorites/Favorites";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default Routes;
