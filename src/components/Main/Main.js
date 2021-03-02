import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getLocationKeyByGEO } from "../../actions/weather";
import { toggleLoading } from "../../actions";

import clsx from "clsx";
import Search from "../Search/Search";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentWeather = useSelector(state => state.weather.current);

  const isDarkMode = useSelector(state => state.isDark);

  useEffect(() => {
    const fetchGeoLocation = async () => {
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
          dispatch(toggleLoading());
        }
      );
    };
    fetchGeoLocation();
  }, [dispatch]);
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
