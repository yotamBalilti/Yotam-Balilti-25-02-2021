import React from "react";

import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import clsx from "clsx";

import useStyles from "./styles";
import FavoritesContainer from "./FavoritesContainer/FavoritesContainer";

const Favorites = () => {
  const classes = useStyles();

  const isDarkMode = useSelector(state => state.isDark);

  return (
    <div
      className={
        !isDarkMode ? classes.favorites : clsx(classes.favorites, classes.dark)
      }
    >
      <Typography variant="h3">Favorites</Typography>
      <FavoritesContainer />
    </div>
  );
};

export default Favorites;
