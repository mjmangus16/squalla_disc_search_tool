import React from "react";
import { Dialog, DialogTitle, withStyles } from "@material-ui/core";

const styles = {};

const LearnMore = ({ data, handleClose, open }) => {
  console.log(data);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">DISC NAME</DialogTitle>
    </Dialog>
  );
};

export default withStyles(styles)(LearnMore);
