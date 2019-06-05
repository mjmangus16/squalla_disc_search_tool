import React from "react";
import { red } from "@material-ui/core/colors";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  logout: {
    color: red[300],
    borderColor: red[300]
  },
  dialog: {
    [theme.breakpoints.down("sm")]: {
      padding: 10
    }
  }
});

const DiscAddedDialog = ({ classes, logout, success, open, toggle }) => {
  return (
    <Dialog open={open} onClose={toggle}>
      <Button size="small" onClick={logout} className={classes.logout}>
        Logout
      </Button>
      <DialogContent className={classes.dialog}>
        <DialogTitle>Success!</DialogTitle>
        <DialogContentText>
          That disc has been added to the database
        </DialogContentText>
        <Button onClick={success}>Add another disc</Button>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(DiscAddedDialog);
