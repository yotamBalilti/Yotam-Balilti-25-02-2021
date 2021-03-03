import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  navbar: {
    position: "fixed",
    zIndex: "10",
    height: "120px",
    display: "flex",
    alignItems: "center",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0 24px",
    background:
      "linear-gradient(180deg, rgba(43,75,149,1) 12%, rgba(178,176,223,1) 100%)",
    [theme.breakpoints.up("md")]: {
      height: "80px",
    },
    [theme.breakpoints.down("md")]: {},
  },
  dark: {
    background:
      "linear-gradient(180deg, rgba(19,48,73,1) 37%, rgba(37,93,142,1) 93%, rgba(46,116,177,1) 100%)",
    color: "#ffffff",
  },
  navbar_container: {
    display: "flex",
    width: "90%",
    alignItems: "flex-start",
    color: "var(--lightText)",
  },
  navbar_links: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar_list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    textDecoration: "none",
    gap: "32px",
    fontSize: "20px",
  },
  navbar_list_item: {
    textDecoration: "none",
    color: "inherit",
    position: "relative",
    display: "flex",
  },
  navbar_logo: {
    height: "100%",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  navLinks: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.up("md")]: {
      gap: "48px",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  fav_count: {
    color: "inherit",
    fontSize: "14px",
    fontWeight: "bold",
    marginLeft: "6px",
    backgroundColor: "red",
    height: "18px",
    width: "18px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar_icon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  navbar_link: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
