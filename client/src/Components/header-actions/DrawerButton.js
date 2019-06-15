import React from "react";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import { Filter } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    marginRight: 5,
    marginLeft: 25,
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline-flex"
    }
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

const FilterComponent = ({ classes, drawerToggle }) => {
  return (
    <Fab
      variant="extended"
      size="small"
      className={classes.button}
      onClick={drawerToggle}
    >
      <Filter className={classes.icon} />
      <span className={classes.text}>Filter / Compare</span>
    </Fab>
  );
};

FilterComponent.propTypes = {
  drawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(FilterComponent);
