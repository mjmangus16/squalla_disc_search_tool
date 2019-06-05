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

import InfiniteRatings from "./Ratings/InfiniteRatings";
import manufactureRatings from "./Ratings/ManufactureRatings";

import getLogo from "./getLogo/getLogo";
import ManufactureRatings from "./Ratings/ManufactureRatings";

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
    ratingsContent = <ManufactureRatings ratings={data.manufactureRatings} />;
  } else {
    ratingsContent = <InfiniteRatings ratings={data.infiniteRatings} />;
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
