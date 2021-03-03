import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";

import "./App.css";
//Redux
import { useDispatch } from "react-redux";
import { getLocation, getLocationKeyByGEO } from "./actions/weather";
import { toggleLoading } from "./actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position =>
        dispatch(
          getLocationKeyByGEO(
            position.coords.latitude,
            position.coords.longitude
          )
        ),
      err => {
        dispatch(getLocation("Tel Aviv"));
      }
    );
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
