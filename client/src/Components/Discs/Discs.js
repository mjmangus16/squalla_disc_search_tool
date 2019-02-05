import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDiscs } from "../../redux/actions/discsActions";

import Disc from "./Disc/Disc";

const styles = theme => ({
  container: {
    height: "calc(100% - 64px)",
    maxWidth: 1200,
    margin: "64px 250px auto auto"
  }
});

class Discs extends Component {
  render() {
    const { classes, toggleRatingsStatus } = this.props;
    let { discs } = this.props.discs;

    const shuffledArray = array => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    let content;

    if (Object.keys(discs).length > 0) {
      discs = shuffledArray(discs);
      content = discs.map(disc => (
        <Grid item key={discs.indexOf(disc)}>
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

Discs.propTypes = {
  getDiscs: PropTypes.func.isRequired,
  discs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  discs: state.discs
});

export default connect(
  mapStateToProps,
  { getDiscs }
)(withStyles(styles)(Discs));
