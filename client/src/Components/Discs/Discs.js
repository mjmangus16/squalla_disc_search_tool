import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

import Disc from "./Disc";

const styles = theme => ({
  container: {
    height: "calc(100% - 120px)",
    maxWidth: 1400,
    margin: "64px auto 56px"
  }
});

class Discs extends Component {
  render() {
    const {
      classes,
      toggleRatingsStatus,
      discs,
      addCompare,
      compareDiscs,
      learnMoreOpen
    } = this.props;

    let content;

    // if (discs.length > 0) {
    //   content = discs.map((disc, i) => (
    //     <Grid item key={`disc-${i}`}>
    //       <Disc
    //         data={disc}
    //         status={toggleRatingsStatus}
    //         addCompare={addCompare}
    //         compareStatus={true}
    //         compareDiscs={compareDiscs}
    //       />
    //     </Grid>
    //   ));
    // }
    if (discs.length > 0) {
      content = discs.map((disc, i) => (
        <Grid item key={`disc-${i}`}>
          <Disc
            data={disc}
            status={toggleRatingsStatus}
            addCompare={addCompare}
            compareStatus={true}
            compareDiscs={compareDiscs}
            learnMoreOpen={learnMoreOpen}
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
