import React from "react";
import { Fab } from "@material-ui/core";
import { Filter } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    marginRight: 5,
    marginLeft: 25
  },
  icon: {
    marginRight: 5,
    marginLeft: 5
  },
  text: {
    margin: "auto 5px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

export default withStyles(styles)(({ classes, filterToggle }) => {
  return (
    <Fab
      variant="extended"
      size="small"
      className={classes.button}
      onClick={filterToggle}
    >
      <Filter className={classes.icon} />
      <span className={classes.text}>Filter</span>
    </Fab>
  );
});
