import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  withStyles,
  Button,
  Tooltip
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

import InfiniteRatings from "./Ratings/InfiniteRatings";
import ManufactureRatings from "./Ratings/ManufactureRatings";

import getLogo from "./getLogo/getLogo";

const styles = {
  card: {
    height: 225,
    width: 175,
    display: "relative"
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
  }
};

export default withStyles(styles)(
  ({ classes, data, status, addCompare, removeCompare, compareStatus }) => {
    let ratingsContent;

    if (status) {
      ratingsContent = <ManufactureRatings ratings={data.manufactureRatings} />;
    } else {
      ratingsContent = <InfiniteRatings ratings={data.infiniteRatings} />;
    }

    return (
      <Card
        raised
        className={classes.card}
        style={addCompare ? { margin: "16px" } : { margin: "16px auto" }}
        id="disc-card"
        onDoubleClickCapture={
          compareStatus ? () => addCompare(data) : () => removeCompare(data)
        }
        onTouchMoveCapture={
          compareStatus ? () => addCompare(data) : () => removeCompare(data)
        }
      >
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
  }
);
