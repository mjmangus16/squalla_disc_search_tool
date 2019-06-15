import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { AddButton, DrawerButton } from "./header-actions/index";

const styles = theme => ({
  flex: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.15em"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexWrap: "flex"
  }
});

const Header = ({ classes, filterToggle, values }) => {
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="headline" color="inherit" className={classes.flex}>
          Squalla Disc Search
        </Typography>
        <AddButton values={values} />
        <DrawerButton filterToggle={filterToggle} />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  filterToggle: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(Header);
