import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Card, CardContent, Slide, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "../../../actions/weather";

import { removeFavorite, toggleLoading } from "../../../actions";
import FavoriteIcon from "@material-ui/icons/Favorite";

import clsx from "clsx";

import useStyles from "./styles";

const FavoritesContainer = () => {
  const classes = useStyles();

  const API_KEY = "XaUIjiUT3lu5kYS8GYEDs1mDAQAsxIYQ";
  const ROOT_URL = "https://dataservice.accuweather.com";
  const favorites = useSelector(state => state.favorites);
  const isMetric = useSelector(state => state.isMetric);
  const isDarkMode = useSelector(state => state.isDark);

  const dispatch = useDispatch();

  const [favs, setFavs] = useState([]);

  const fetchFavorites = async () => {
    dispatch(toggleLoading());
    let tempFavorites = {};
    for await (let favorite of favorites) {
      const response = await axios.get(
        `${ROOT_URL}/currentconditions/v1/${favorite.id}?apikey=${API_KEY}`
      );
      await (tempFavorites[favorite.id] = response.data[0]);
    }
    setFavs(tempFavorites);
    dispatch(toggleLoading());
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return favs.length === 0 ? (
    "Loading... "
  ) : (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Grid container className={classes.container} spacing={2}>
        {favorites.map((fav, i) => (
          <Slide
            direction="right"
            in
            mountOnEnter
            unmountOnExit
            key={i}
            timeout={300 * i}
          >
            <Grid item xs={12} sm>
              <Card
                className={
                  !isDarkMode
                    ? classes.card
                    : clsx(classes.card, classes.dark_card)
                }
                key={i}
              >
                <Link to="./" className={classes.link}>
                  <CardContent className={classes.header}>
                    <FavoriteIcon
                      onClick={() => dispatch(removeFavorite(fav.id))}
                      className={classes.like}
                    />
                  </CardContent>
                  <CardContent
                    className={classes.card_content}
                    onClick={() => dispatch(getLocation(fav.name))}
                  >
                    <Grid item>
                      <Typography variant="h5" className={classes.info}>
                        {fav.name}
                      </Typography>
                      <Typography className={classes.icon}>
                        <img
                          src={`/icons/icon${favs[fav.id].WeatherIcon}.png`}
                          alt=""
                        />
                      </Typography>
                      <Typography>{favs[fav.id].WeatherText}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h3"
                        className={
                          !isDarkMode ? classes.temp : classes.darkTemp
                        }
                      >
                        {isMetric
                          ? `${Math.round(
                              favs[fav.id].Temperature.Metric.Value
                            )}\xB0C`
                          : `${Math.round(
                              favs[fav.id].Temperature.Imperial.Value
                            )}\xB0F`}
                      </Typography>
                    </Grid>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Slide>
  );
};

export default FavoritesContainer;
