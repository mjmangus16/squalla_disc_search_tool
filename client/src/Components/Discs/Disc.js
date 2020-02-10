import React, { Component, useState } from "react";
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

import Ratings from "./Ratings";
import LearnMore from "./LearnMore";
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

const Disc = ({
  classes,
  data,
  status,
  addCompare,
  removeCompare,
  compareStatus,
  compareDiscs,
  learnMoreOpen
}) => {
  let ratingsContent;

  if (status) {
    ratingsContent = <Ratings ratings={data.man_ratings} />;
  } else {
    ratingsContent = <Ratings ratings={data.infinite_ratings} />;
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
          title={data.brand}
          image={getLogo(data.brand)}
          className={classes.media}
        />
      </div>
      <CardContent className={classes.content}>
        <CardHeader
          title={`${data.title.slice(0, 15)}${
            data.title.length > 15 ? ".." : ""
          }`}
          subheader={data.type}
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
          // href={data.link}
          // target="_blank"
          style={{ marginLeft: 10, color: orange[400] }}
          onClick={() => learnMoreOpen(data)}
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
};

export default withStyles(styles)(Disc);
