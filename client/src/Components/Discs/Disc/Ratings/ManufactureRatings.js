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
  },
  unavailable: {
    padding: "5px 3px",
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    borderLeft: "1px solid grey",
    borderRight: "1px solid grey",
    width: 143
  }
};

const ManufactureRatings = ({ classes, ratings }) => {
  if (ratings && ratings.speed !== 0 && ratings.speed !== "") {
    return (
      <div className={classes.ratingsContainer}>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {ratings.speed}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {ratings.glide}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {ratings.turn}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating4}
          classes={{ h6: classes.h6 }}
        >
          {ratings.fade}
        </Typography>
      </div>
    );
  } else {
    return (
      <div className={classes.ratingsContainer}>
        <Typography
          variant="h6"
          align="center"
          className={classes.unavailable}
          classes={{ h6: classes.h6 }}
        >
          Unavailable
        </Typography>
      </div>
    );
  }
};

export default withStyles(styles)(ManufactureRatings);
