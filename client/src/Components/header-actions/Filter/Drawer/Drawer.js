import React from "react";
import { Drawer, withStyles } from "@material-ui/core";
import List from "./List/List";

const styles = theme => ({
  drawer: {
    height: "calc(100% - 64px)",
    marginTop: 64,
    [theme.breakpoints.up("md")]: {
      width: 250
    },
    [theme.breakpoints.down("sm")]: {
      width: 200
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
  clearButton
}) => {
  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={filterStatus}
      onClose={filterToggle}
    >
      <div tabIndex={0} role="button" className={classes.drawer}>
        <List
          toggleRatingsStatus={toggleRatingsStatus}
          toggleRatings={toggleRatings}
          handlers={filterHandlers}
          selections={filterSelections}
          submitButton={submitButton}
          clearButton={clearButton}
        />
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);