import React from "react";
import { Drawer, withStyles } from "@material-ui/core";
import List from "./List/List";

const styles = theme => ({
  drawer: {
    height: "calc(100% - 64px)",
    marginTop: 64,
    [theme.breakpoints.up("xs")]: {
      width: 300
    },
    [theme.breakpoints.down("xs")]: {
      width: 195,
      maxWidth: 195
    }
  }
});

const DrawerComponent = ({
  classes,
  filterStatus,
  filterToggle,
  toggleRatings,
  toggleRatingsStatus,
  filterHandlers,
  filterSelections,
  submitButton,
  clearButton,
  values
}) => {
  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={filterStatus}
      onClose={filterToggle}
      className={classes.drawerContainer}
    >
      <div tabIndex={0} role="button" className={classes.drawer}>
        <List
          toggleRatingsStatus={toggleRatingsStatus}
          toggleRatings={toggleRatings}
          handlers={filterHandlers}
          selections={filterSelections}
          submitButton={submitButton}
          clearButton={clearButton}
          values={values}
        />
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);
