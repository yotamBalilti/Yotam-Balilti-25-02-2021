import { makeStyles } from "@material-ui/core/styles";
import lightBg from "../../assets/lightBg.jpg";
import darkBg from "../../assets/darkBg.jpg";

export default makeStyles(theme => ({
  main: {
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `url(${lightBg}) center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    // padding: "24px",
    padding: "100px 24px",
    [theme.breakpoints.down("sm")]: {
      padding: "160px 24px",
    },
  },
  dark: {
    background: `url(${darkBg}) center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));
