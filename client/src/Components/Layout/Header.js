import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Add, Filter } from "../header-actions/index";

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
        <Add values={values} />
        <Filter filterToggle={filterToggle} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
