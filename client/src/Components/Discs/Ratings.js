import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = {
  h6: {
    fontSize: ".8em"
  },
  ratingsContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "10px auto"
  },
  rating: {
    padding: "5px 3px",
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    borderLeft: "1px solid grey",
    width: 35
  },
  rating4: {
    padding: "5px 3px",
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    borderLeft: "1px solid grey",
    borderRight: "1px solid grey",
    width: 35
  }
};

const Ratings = ({ classes, ratings }) => {
  const formatted = ratings.split("/");
  const array = formatted.map(arr => {
    let cont = arr;
    if (arr.includes(".") && arr[arr.length - 1] === "0") {
      cont = arr.substring(0, arr.length - 2);
    }
    return cont;
  });

  return (
    <div className={classes.ratingsContainer}>
      <Typography
        variant="h6"
        align="center"
        className={classes.rating}
        classes={{ h6: classes.h6 }}
      >
        {array[0]}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        className={classes.rating}
        classes={{ h6: classes.h6 }}
      >
        {array[1]}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        className={classes.rating}
        classes={{ h6: classes.h6 }}
      >
        {array[2]}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        className={classes.rating4}
        classes={{ h6: classes.h6 }}
      >
        {array[3]}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Ratings);
