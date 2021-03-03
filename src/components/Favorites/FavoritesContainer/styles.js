import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: "1200px",
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center",
    padding: " 48px 24px",
    gap: "24px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "400px",
    minWidth: "200px",
    cursor: "pointer",
    textDecoration: "none",
    minHeight: "250px",
    position: "relative",
  },
  dark_card: {
    background:
      "linear-gradient(306deg, rgba(22,22,22,1) 31%, rgba(34,34,34,1) 66%)",
    color: "#ffffff",
  },
  card_content: {
    width: "100%",
    position: "relative",
    minWidth: "200px",
    minHeight: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    textAlign: "center",
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    color: "inherit",
    textDecoration: "none",
  },
  icon: {
    transform: "scale(1.6)",
    margin: "24px",
  },
}));
