import React from "react";
import LoginForm from "./LoginForm";
import { red } from "@material-ui/core/colors";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
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

const LoginDialog = ({
  classes,
  open,
  password,
  email,
  login,
  toggle,
  dataHandler
}) => {
  return (
    <Dialog open={open} onClose={toggle}>
      <DialogContent className={classes.dialog}>
        <DialogTitle>Login</DialogTitle>
        <DialogContentText>
          You must be an authorized user to add a disc
        </DialogContentText>
        <LoginForm
          email={email}
          password={password}
          dataHandler={dataHandler}
          loginHandler={login}
        />
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(LoginDialog);
