import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Slide,
  Typography,
  CardActions,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeather } from "../../actions/weather";

import { removeFavorite, toggleLoading } from "../../actions";
import FavoriteIcon from "@material-ui/icons/Favorite";

import clsx from "clsx";

import useStyles from "./styles";

const Favorites = () => {
  const classes = useStyles();
  const API_KEY = "pmAtko3VXINIcIPEZKcHAI7swRi0FpPJ";
  const favorites = useSelector(state => state.favorites);
  const isMetric = useSelector(state => state.isMetric);
  const isDarkMode = useSelector(state => state.isDark);
  const isLoading = useSelector(state => state.isLoading);

  const dispatch = useDispatch();

  const [favs, setFavs] = useState([]);

  const fetchFavorites = async () => {
    dispatch(toggleLoading());
    const tempFavorites = {};
    for await (let favorite of favorites) {
      const response = await axios.get(
        `https://dataservice.accuweather.com/currentconditions/v1/${favorite.id}?apikey=${API_KEY}`
      );
      tempFavorites[favorite.id] = response.data[0];
    }
    setFavs(tempFavorites);
    dispatch(toggleLoading());
  };

  useEffect(() => {
    fetchFavorites();
  }, [isLoading]);

  console.log("favorties: ", favorites);
  console.log("favs: ", favs);
  return (
    <div
      className={
        !isDarkMode ? classes.favorites : clsx(classes.favorites, classes.dark)
      }
    >
      <Typography variant="h3">Favorites</Typography>
      {isLoading ? (
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
                <Grid item xs={12} sm={3}>
                  <Card
                    className={
                      !isDarkMode
                        ? classes.card
                        : clsx(classes.card, classes.dark_card)
                    }
                    onClick={() => dispatch(getLocation(fav.name))}
                    key={i}
                  >
                    <Link to="./" className={classes.link}>
                      <CardContent className={classes.card_content}>
                        <Typography>{fav && "Today"}</Typography>
                        <Grid item>
                          <Typography variant="h4" className={classes.info}>
                            {fav.name}
                          </Typography>
                          <Typography color="textSecondary">
                            {fav.country}
                          </Typography>
                        </Grid>
                        {/* <Grid item>
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
                            <Typography variant="h7">
                              {favs[fav.id].WeatherText}
                            </Typography>
                          </Grid> */}
                      </CardContent>
                    </Link>
                    <CardActions className={classes.actions}>
                      <Grid item>
                        <FavoriteIcon
                          onClick={() => dispatch(removeFavorite(fav.id))}
                          className={classes.like}
                        />
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Slide>
            ))}
          </Grid>
        </Slide>
      )}
    </div>
  );
};

export default Favorites;
