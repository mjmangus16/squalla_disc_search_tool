import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDiscs } from "../../redux/actions/discsActions";

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
    const { classes, toggleRatingsStatus } = this.props;
    let { discs } = this.props.discs;

    let content;

    if (Object.keys(discs).length > 0) {
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
