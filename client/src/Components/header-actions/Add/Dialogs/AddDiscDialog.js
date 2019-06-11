import React from "react";
import PropTypes from "prop-types";
import AddForm from "../AddForm";
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

const AddDiscDialog = ({ classes, logout, success, values, open, toggle }) => {
  return (
    <Dialog open={open} onClose={toggle}>
      <Button size="small" onClick={logout} className={classes.logout}>
        Logout
      </Button>
      <DialogContent className={classes.dialog}>
        <DialogTitle>Add A Disc</DialogTitle>
        <DialogContentText>Please fill out the form below</DialogContentText>
        <AddForm success={success} values={values} />
      </DialogContent>
    </Dialog>
  );
};

AddDiscDialog.propTypes = {
  logout: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(AddDiscDialog);
