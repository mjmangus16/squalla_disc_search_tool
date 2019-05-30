import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

import Disc from "./Disc/Disc";

const styles = theme => ({
  container: {
    height: "calc(100% - 120px)",
    maxWidth: 1400,
    margin: "64px auto 56px"
  }
});

class Discs extends Component {
  render() {
    const { classes, toggleRatingsStatus, filteredDiscs } = this.props;

    let content;

    if (filteredDiscs.length > 0) {
      content = filteredDiscs.map((disc, i) => (
        <Grid item key={`disc-${i}`}>
          <Disc data={disc} status={toggleRatingsStatus} />
        </Grid>
      ));
    }
    return (
      <Grid container justify="center" className={classes.container}>
        {content}
      </Grid>
    );
  }
}

export default withStyles(styles)(Discs);
