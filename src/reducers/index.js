import { combineReducers } from "redux";
import weatherReducer from "./weather";
import favoritesReducer from "./favorites";
import metricReducer from "./units";
import darkModeReducer from "./darkmode";
import loadingReducer from "./loading";
import locationReducer from "./location";
import suggestionsReducer from "./suggestions";

export default combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer,
  isMetric: metricReducer,
  isDark: darkModeReducer,
  isLoading: loadingReducer,
  location: locationReducer,
  suggestions: suggestionsReducer,
});
