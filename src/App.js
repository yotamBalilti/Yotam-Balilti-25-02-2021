import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorites/Favorites";

import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
