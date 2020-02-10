import React, { useState } from "react";
import {
  Dialog,
  withStyles,
  CardMedia,
  CardContent,
  Typography,
  ListItem,
  CardHeader,
  Button,
  Tabs,
  Tab
} from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Ratings from "./Ratings";
import getLogo from "./getLogo/getLogo";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "40% 60%",
    maxHeight: 425,
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
      gridTemplateRows: "auto auto",
      width: "auto",
      maxHeight: "100%",
      minHeight: "auto"
    }
  },
  flightPath: {
    width: "100%",
    maxHeight: 425,
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      width: 310,
      maxHeight: "100%",
      gridRow: 2,
      minHeight: "auto"
    }
  },
  info: {
    maxHeight: 425,
    overflowY: "scroll",
    minHeight: 300,
    [theme.breakpoints.down("sm")]: {
      width: 310,
      maxHeight: "100%",
      overflowY: "visible",
      minHeight: "auto"
    }
  },
  mediaContainer: {
    height: 90,
    width: "100%",
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
  ratingsLI: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 5px"
  },
  pos: {
    marginBottom: 12,
    fontSize: ".9em"
  },
  divider: {
    borderTop: "1px solid #606060"
  },
  dialogRoot: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const LearnMore = ({ data, handleClose, open, classes, width }) => {
  const [readMore, setReadMore] = useState(false);

  const setDescription = () => {
    if (data.description) {
      if (readMore) {
        return data.description;
      } else {
        return data.description.slice(0, 100) + "...";
      }
    }
  };

  console.log(window.innerWidth);

  return (
    <Dialog
      fullWidth={isWidthDown("sm", width) ? false : true}
      maxWidth={"sm"}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      classes={{ paper: classes.dialogRoot }}
    >
      <div className={classes.container}>
        <img src={data.flight_path} className={classes.flightPath} />

        <div className={classes.info}>
          <div className={classes.mediaContainer}>
            <CardMedia
              title={data.brand}
              image={getLogo(data.brand)}
              className={classes.media}
            />
          </div>
          <CardHeader
            action={
              <Button
                color="secondary"
                variant="contained"
                href={data.link}
                target="_blank"
                size="small"
              >
                {/* <ShopIcon style={{ marginRight: 5 }} /> */}
                <span>Buy Now</span>
              </Button>
            }
            title={data.title}
            subheader={data.stability + " " + data.type}
          />

          <CardContent className={classes.content} style={{ paddingTop: 0 }}>
            <div className={classes.divider} style={{ paddingBottom: 16 }} />
            <Typography variant="body1" color="textSecondary" component="p">
              {setDescription()}
            </Typography>
            <Button
              size="small"
              variant="text"
              fullWidth
              style={{ marginBottom: 8 }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </Button>
            <div className={classes.divider} />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ paddingTop: 16, textAlign: "center" }}
            >
              | <span style={{ padding: "0px 5px" }}>Speed</span> |{" "}
              <span style={{ padding: "0px 5px" }}>Glide</span> |{" "}
              <span style={{ padding: "0px 5px" }}>Turn</span> |{" "}
              <span style={{ padding: "0px 5px" }}>Fade</span> |
            </Typography>

            {data.man_ratings && (
              <ListItem className={classes.ratingsLI}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Manufacture Ratings:
                </Typography>
                <div style={{ marginRight: 0 }}>
                  <Ratings ratings={data.man_ratings} />
                </div>
              </ListItem>
            )}
            {data.infinite_ratings && (
              <ListItem className={classes.ratingsLI}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Infinite Ratings:
                </Typography>
                <div style={{ marginRight: 0 }}>
                  <Ratings ratings={data.infinite_ratings} />
                </div>
              </ListItem>
            )}
            <div className={classes.divider} style={{ marginTop: 11 }} />
            <div style={{ paddingTop: 15 }}>
              <Typography variant="body1" color="textSecondary" component="p">
                Diameter: {data.diameter}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Height: {data.height}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Rim Depth: {data.rim_depth}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Rim Width: {data.rim_width}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Max Weight: {data.max_weight}
              </Typography>
            </div>
          </CardContent>
        </div>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(withWidth()(LearnMore));
