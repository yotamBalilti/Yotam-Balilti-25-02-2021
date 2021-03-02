import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  search: {
    width: "100%",
    maxWidth: "600px",
  },
  search_form: {
    margin: theme.spacing(2),
  },
  list: {
    height: "200px",
    width: "100%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "4px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  clear: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  suggestion_item: {
    cursor: "pointer",
  },
  dark: {
    background:
      "linear-gradient(306deg, rgba(22,22,22,1) 31%, rgba(34,34,34,1) 66%)",

    color: "#ffffff",
    borderRadius: "8px",
  },
}));
