import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, convertUnits } from "../../actions";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./styles";
import clsx from "clsx";

const Navbar = () => {
  const classes = useStyles();
  const isDarkMode = useSelector(state => state.isDark);
  const isMetric = useSelector(state => state.isMetric);
  const favorites = useSelector(state => state.favorites);

  const dispatch = useDispatch();

  const links = (
    <div className={classes.navLinks}>
      <div className={classes.navbar_list}>
        <NavLink to="/" className={classes.navbar_list_item}>
          <HomeIcon fontSize="large" />
        </NavLink>

        <NavLink to="/favorites" className={classes.navbar_list_item}>
          <FavoriteIcon fontSize="large" />
          <span className={classes.fav_count}>{favorites.length}</span>
        </NavLink>
      </div>
      <div className={classes.navbar_list}>
        <div className={classes.navbar_list_item}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>light</Grid>
              <Grid item>
                <Switch
                  checked={isDarkMode}
                  onClick={e => dispatch(toggleDarkMode())}
                />
              </Grid>
              <Grid item>dark</Grid>
            </Grid>
          </Typography>
        </div>
        <div className={classes.navbar_list_item}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>°F</Grid>
              <Grid item>
                <Switch
                  checked={isMetric}
                  onClick={e => dispatch(convertUnits())}
                />
              </Grid>
              <Grid item>°C</Grid>
            </Grid>
          </Typography>
        </div>
      </div>
    </div>
  );

  return (
    <Grid
      container
      className={
        !isDarkMode ? classes.navbar : clsx(classes.navbar, classes.dark)
      }
    >
      <Grid item className={classes.navbar_container}>
        <Typography className={classes.navbar_logo}>WeatherApp</Typography>
        {/* <div className={classes.navbar_main}> */}
        <div className={classes.navbar_links}>{links}</div>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default Navbar;
