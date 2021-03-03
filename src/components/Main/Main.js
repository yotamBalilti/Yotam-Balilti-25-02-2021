import React from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";
import Search from "../Search/Search";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const isDarkMode = useSelector(state => state.isDark);

  return (
    <div
      className={!isDarkMode ? classes.main : clsx(classes.main, classes.dark)}
    >
      <Search />
      <WeatherContainer />
    </div>
  );
};

export default Main;
