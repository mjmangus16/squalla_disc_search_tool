import React, { Component } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: 500,
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white"
  }
});

class Footer extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer);
