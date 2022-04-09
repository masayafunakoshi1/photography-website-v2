import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const Loading = () => {
  //Figure out how to change the size of circle

  const useStyles = makeStyles(() => ({
    root: {
      size: 80,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root} className="loader">
      <CircularProgress size={100} />
    </div>
  );
};

export default Loading;
