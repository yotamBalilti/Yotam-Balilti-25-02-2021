import { makeStyles } from "@material-ui/core/styles";
import lightBg from "../../assets/2850815.jpg";
import darkBg from "../../assets/1081629.png";

export default makeStyles(theme => ({
  favorites: {
    width: "100%",
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    // border: "1px solid blue",
    paddingTop: "24px",
    background: `url(${lightBg}) center no-repeat`,
    backgroundSize: "cover",
  },
  dark: {
    background: `url(${darkBg}) center no-repeat`,
    backgroundSize: "cover",
  },
  container: {
    maxWidth: "1200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "400px",
    minWidth: "200px",
    cursor: "pointer",
    textDecoration: "none",
  },
  dark_card: {
    background:
      "linear-gradient(306deg, rgba(22,22,22,1) 31%, rgba(34,34,34,1) 66%)",
    color: "#ffffff",
  },
  card_content: {
    position: "relative",
    width: "100%",
    textDecoration: "none",
  },
  like: {
    position: "absolute",
    top: "12px",
    right: "12px",
    fontSize: "36px",
    color: "red",
    zIndex: "100",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  darkTemp: {
    color: "#82dcf8",
  },
  temp: {
    color: "#12387F",
  },
  actions: {
    position: "relative",
    height: "100px",
    display: "flex",
    color: "inherit",
    textDecoration: "none",
  },
}));
