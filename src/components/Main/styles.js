import { makeStyles } from "@material-ui/core/styles";
import lightBg from "../../assets/2850815.jpg";
import darkBg from "../../assets/1081629.png";

export default makeStyles(theme => ({
  main: {
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-evenly",
    // border: "1px solid blue",
    background: `url(${lightBg}) center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    paddingTop: "120px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  dark: {
    background: `url(${darkBg}) center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));
