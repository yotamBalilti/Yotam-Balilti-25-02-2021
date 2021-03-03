import axios from "axios";

const API_KEY = "XaUIjiUT3lu5kYS8GYEDs1mDAQAsxIYQ";
const ROOT_URL = "https://dataservice.accuweather.com";

// Get array of locations suggestions with RAW DATA { cityName, key, country }
export const getSuggestions = cityName => async dispatch => {
  if (cityName !== "") {
    await dispatch({ type: "GET_SUGGESTIONS_REQ" });
    const response = await axios.get(
      `${ROOT_URL}/locations/v1/cities/autocomplete?q=${cityName}&apikey=${API_KEY}`
    );
    await dispatch({
      type: "GET_SUGGESTIONS_RES",
      payload: response.data.map(suggest => ({
        cityName: suggest.LocalizedName,
        key: suggest.Key,
        country: suggest.Country.LocalizedName,
      })),
    });
  }
};

// Set location RAW DATA { cityName, key, country} - only if it select from the locations suggestions
export const setLocationBySuggestion = location => {
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};

// Set text value from the search box
export const setSuggestValue = text => {
  return {
    type: "SET_TEXT",
    payload: text,
  };
};

// Reset suggestions and text value to default
export const resetSuggestions = () => {
  return {
    type: "RESET_SUGGESTIONS",
  };
};
