import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getWeather } from "../../actions/weather";
import {
  getSuggestions,
  resetSuggestions,
  setLocationBySuggestion,
  setSuggestValue,
} from "../../actions/autocomplete";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import { Grid, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { List as MUIList, ListItem, Slide } from "@material-ui/core";
import clsx from "clsx";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CustomizedSnackbar from "../Snackbar/Snackbar";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#45561e",
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

const Search = () => {
  const classes = useStyles();
  const suggestions = useSelector(state => state.suggestions);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDark);
  const [open, setOpen] = useState(false);

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setSuggestValue(value));
    if (value.length > 0) {
      dispatch(getSuggestions(value));
    } else {
      dispatch(resetSuggestions());
    }
  };

  const handleSubmit = e => {
    if (
      suggestions.text.length > 0 &&
      suggestions.isFetching === 0 &&
      suggestions.locations.length > 0
    ) {
      dispatch(getLocation(suggestions.locations[0].cityName));
      dispatch(getWeather(suggestions.locations[0].key));
      dispatch(resetSuggestions());
    } else setOpen(true);
  };

  const handleKeyPress = async e => {
    if (e.charCode === 13 || e.key === "Enter") {
      e.preventDefault();
      await handleSubmit();
    }
  };

  const labelButton = () => {
    if (suggestions.locations.length > 0 && suggestions.text.length > 0) {
      return (
        <div
          className={classes.clear}
          onClick={() => dispatch(resetSuggestions())}
        >
          <CloseIcon />
          Clear suggestions
        </div>
      );
    }
  };

  const suggestionSelected = locationRawData => {
    dispatch(resetSuggestions());
    dispatch(setLocationBySuggestion(locationRawData));
    dispatch(getWeather(locationRawData.key));
  };

  const renderSuggestions = () => {
    if (suggestions.locations.length === 0 || suggestions.text.length === 0) {
      return null;
    }

    return (
      <MUIList
        dense
        className={
          !isDarkMode ? classes.list : clsx(classes.list, classes.dark)
        }
      >
        {suggestions.locations.map((suggestion, i) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={i}>
            <ListItem
              onClick={async () => suggestionSelected(suggestion)}
              dense
              key={i}
              className={classes.suggestion_item}
            >
              {suggestion.cityName} , {suggestion.country}
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    );
  };

  return (
    <ThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <div className={classes.search}>
        <form className={classes.search_form} noValidate autoComplete="off">
          <Grid item>
            <TextField
              className={
                !isDarkMode
                  ? classes.serach_bar
                  : clsx(classes.serach_bar, classes.dark)
              }
              color="primary"
              id="searchBar"
              value={suggestions.text}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              label="Enter City"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon onClick={handleSubmit} />
                  </InputAdornment>
                ),
                style: isDarkMode ? { color: "#ffffff" } : { color: "#000000" },
              }}
              InputLabelProps={{
                style: isDarkMode ? { color: "#ffffff" } : { color: "#000000" },
              }}
            />
            <Grid item>
              {labelButton()}
              {renderSuggestions()}
            </Grid>
          </Grid>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Search;
