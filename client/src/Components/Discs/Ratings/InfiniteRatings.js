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

const InfiniteRatings = ({ classes, ratings }) => {
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
};

export default withStyles(styles)(InfiniteRatings);
