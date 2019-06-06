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
    const { classes, toggleRatingsStatus, discs } = this.props;

    let content;

    if (discs.length > 0) {
      content = discs.map((disc, i) => (
        <Grid item key={`disc-${i}`}>
          <Disc
            data={disc}
            status={toggleRatingsStatus}
            compareDrop={this.props.compareDrop}
          />
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
