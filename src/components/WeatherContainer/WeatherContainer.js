import React from "react";
import clsx from "clsx";
import useStyles from "./styles";
import { Card, CardContent, Grid, Slide, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import convert from "../Converter/Convert";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#555555",
    },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ededed",
    },
    secondary: {
      main: "#1e1e1e",
    },
  },
});

const WeatherContainer = () => {
  const classes = useStyles();

  const dailyForecasts = useSelector(state => state.weather.forecasts);
  const currentWeather = useSelector(state => state.weather.current);
  const location = useSelector(state => state.location);
  const favorites = useSelector(state => state.favorites);
  const isMetric = useSelector(state => state.isMetric);
  const isDarkMode = useSelector(state => state.isDark);
  const isLoading = useSelector(state => state.isLoading);
  const isDayTime = currentWeather.IsDayTime ? "Day" : "Night";

  const dispatch = useDispatch();

  const epochToDay = epochDate => {
    return new Date(epochDate).toLocaleDateString("en-US", { weekday: "long" });
  };

  return isLoading ? (
    "Loading... "
  ) : (
    <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <Grid container spacing={5} className={classes.container}>
        <Grid item container xs={12} className={classes.current}>
          <Grid item xs>
            <Typography>{currentWeather && "Today"}</Typography>
            <Typography variant="h3" className={classes.info}>
              {location.cityName}
            </Typography>
            <Typography>{location.country}</Typography>
          </Grid>

          <Grid item align="center" xs>
            <Typography className={classes.icon}>
              <img
                src={`/icons/icon${currentWeather.WeatherIcon}.png`}
                alt=""
              />
            </Typography>
            <Typography>{currentWeather.WeatherText}</Typography>
          </Grid>
          <Grid item xs>
            <Typography className={classes.temp}>
              {isMetric
                ? `${Math.round(currentWeather.Temperature.Metric.Value)}\xB0C`
                : `${Math.round(
                    currentWeather.Temperature.Imperial.Value
                  )}\xB0F`}
            </Typography>
          </Grid>
          <Grid item xs align="end" className={classes.like}>
            {favorites.find(({ id }) => id === location.key) ? (
              <FavoriteIcon
                onClick={() => dispatch(removeFavorite(location.key))}
                fontSize="large"
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() =>
                  dispatch(addFavorite(location.key, location.cityName))
                }
                fontSize="large"
              />
            )}
          </Grid>
        </Grid>
        {dailyForecasts.map((day, i) => (
          <Slide direction="right" in mountOnEnter unmountOnExit key={i}>
            {dailyForecasts && (
              <Grid item xs={12} sm>
                <Slide
                  direction="right"
                  in
                  mountOnEnter
                  unmountOnExit
                  key={i}
                  timeout={400 * i}
                >
                  <Card key={i}>
                    <CardContent
                      className={
                        !isDarkMode
                          ? classes.card
                          : clsx(classes.card, classes.dark_card)
                      }
                    >
                      <Typography variant="h6">
                        {epochToDay(day.Date)}
                      </Typography>
                      <div className={classes.card_weather}>
                        <Typography className={classes.forecast_icon}>
                          <img
                            src={`/icons/icon${day[isDayTime].Icon}.png`}
                            alt=""
                          />
                        </Typography>
                        <Typography>{day[isDayTime].IconPhrase}</Typography>
                      </div>
                      <Typography variant="h5" className={classes.card_temp}>
                        {isMetric
                          ? `${Math.round(day.Temperature.Maximum.Value)}°C -
                             ${Math.round(day.Temperature.Minimum.Value)}°C`
                          : convert(
                              day.Temperature.Maximum.Value,
                              day.Temperature.Minimum.Value
                            )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            )}
          </Slide>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default WeatherContainer;
