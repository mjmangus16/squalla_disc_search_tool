import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  withStyles,
  Button,
  Tooltip
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

import getLogo from "./getLogo/getLogo";

const styles = {
  card: {
    height: 225,
    width: 175,
    display: "relative",
    margin: "16px"
  },
  mediaContainer: {
    height: 90,
    width: 175,
    backgroundColor: "white",
    opacity: 0.5,
    padding: "5px 0"
  },
  media: {
    height: 80,
    width: 150,
    margin: "auto",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  content: {
    height: 150,
    width: 175,
    padding: 0
  },
  header: {
    paddingTop: 5,
    paddingBottom: 0
  },

  title: {
    fontSize: "1em"
  },
  subHeader: {
    fontSize: ".8em"
  },
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

export default withStyles(styles)(({ classes, data, status }) => {
  let ratingsContent;

  if (status) {
    if (data.manufactureRatings && data.manufactureRatings.speed !== 0) {
      ratingsContent = (
        <div className={classes.ratingsContainer}>
          <Typography
            variant="h6"
            align="center"
            className={classes.rating}
            classes={{ h6: classes.h6 }}
          >
            {data.manufactureRatings.speed
              ? data.manufactureRatings.speed
              : "n/a"}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.rating}
            classes={{ h6: classes.h6 }}
          >
            {data.manufactureRatings.glide ||
            data.manufactureRatings.glide === 0
              ? data.manufactureRatings.glide
              : "n/a"}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.rating}
            classes={{ h6: classes.h6 }}
          >
            {data.manufactureRatings.turn || data.manufactureRatings.turn === 0
              ? data.manufactureRatings.turn
              : "n/a"}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.rating4}
            classes={{ h6: classes.h6 }}
          >
            {data.manufactureRatings.fade || data.manufactureRatings.fade === 0
              ? data.manufactureRatings.fade
              : "n/a"}
          </Typography>
        </div>
      );
    } else {
      ratingsContent = (
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
  } else {
    ratingsContent = (
      <div className={classes.ratingsContainer}>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {data.infiniteRatings.speed}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {data.infiniteRatings.glide}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating}
          classes={{ h6: classes.h6 }}
        >
          {data.infiniteRatings.turn}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          className={classes.rating4}
          classes={{ h6: classes.h6 }}
        >
          {data.infiniteRatings.fade}
        </Typography>
      </div>
    );
  }

  return (
    <Card raised className={classes.card} id="disc-card">
      <div className={classes.mediaContainer}>
        <CardMedia
          title={data.manufacture}
          image={getLogo(data.manufacture)}
          className={classes.media}
        />
      </div>
      <CardContent className={classes.content}>
        <CardHeader
          title={data.discName}
          subheader={data.discType}
          className={classes.header}
          classes={{ title: classes.title, subheader: classes.subHeader }}
        />
        <Tooltip
          disableFocusListener
          placement="bottom-end"
          title={data.stability}
        >
          {ratingsContent}
        </Tooltip>
        <Button
          size="small"
          href={data.link}
          target="_blank"
          style={{ marginLeft: 10, color: orange[400] }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
});
