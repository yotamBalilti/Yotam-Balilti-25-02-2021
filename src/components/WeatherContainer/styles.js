import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: "1200px",
  },
  current: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "200px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "300px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      minHeight: "80px",
    },
  },
  dark_card: {
    background:
      "linear-gradient(306deg, rgba(22,22,22,1) 31%, rgba(34,34,34,1) 66%)",

    color: "#ffffff",
  },
  icon: {
    transform: "scale(2)",
    padding: "12px",
  },
  forecast_icon: {
    margin: "24px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "12px 0",
    },
  },
  temp: {
    fontSize: "72px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "48px",
    },
  },
  card_weather: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  like: {
    color: "red",
  },
}));
