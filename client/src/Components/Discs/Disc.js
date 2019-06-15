import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  withStyles,
  Button,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { orange, red } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import InfiniteRatings from "./Ratings/InfiniteRatings";
import ManufactureRatings from "./Ratings/ManufactureRatings";

import getLogo from "./getLogo/getLogo";

const removeRed = red[300];

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
  iconAdd: {
    padding: 0,
    float: "right",
    marginRight: 18,
    marginTop: 6,
    border: `1px solid #66bb6a`
  },
  iconRemove: {
    padding: 0,
    float: "right",
    marginRight: 18,
    marginTop: 6,
    border: `1px solid ${removeRed}`
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
          {compareStatus ? (
            <IconButton
              size="small"
              color="secondary"
              style={styles.iconAdd}
              onClick={() => addCompare(data)}
            >
              <AddIcon style={{ fontSize: 15 }} />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              style={styles.iconRemove}
              onClick={() => removeCompare(data)}
            >
              <RemoveIcon style={{ color: removeRed, fontSize: 15 }} />
            </IconButton>
          )}
        </CardContent>
      </Card>
    );
  }
);