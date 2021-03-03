import { makeStyles } from "@material-ui/core/styles";
import lightBg from "../../assets/lightBg.jpg";
import darkBg from "../../assets/darkBg.jpg";

export default makeStyles(theme => ({
  favorites: {
    width: "100%",
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "24px",
    background: `url(${lightBg}) center no-repeat`,
    backgroundSize: "cover",
  },
  dark: {
    background: `url(${darkBg}) center no-repeat`,
    backgroundSize: "cover",
  },
}));
