import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ScrollToTop from "../ScrollToTop";
import "../styles/GalleryStyles.css";
import GridListComp from "./GridListComp";
import imgData from "./images/EventsImgs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
    maxWidth: "100vw",
  },
}));

const Events = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ScrollToTop />

      <GridListComp imgData={imgData} />
    </div>
  );
};

export default Events;
