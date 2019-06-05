import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/actions/authActions";
import {
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  withStyles
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

import AddDiscDialog from "./Dialogs/AddDiscDialog";
import DiscAddedDialog from "./Dialogs/DiscAddedDialog";
import LoginForm from "./LoginForm";

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

class AddDialog extends Component {
  state = {
    open: false,
    success: false,
    email: "",
    password: "",
    auth: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSuccess = () => {
    this.setState({ success: !this.state.success });
  };

  loginHandler = e => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  logoutHandler = () => {
    this.props.logoutUser();
  };

  render() {
    const { open, success } = this.state;
    const { classes, values } = this.props;
    const { isAuthenticated } = this.props.auth;

    let dialogContent;

    if (Object.keys(this.props.auth).length > 0) {
      if (isAuthenticated) {
        if (!success) {
          dialogContent = (
            <AddDiscDialog
              logout={this.logoutHandler}
              success={this.handleSuccess}
              values={values}
              open={open}
              toggle={this.handleToggle}
            />
          );
        } else {
          dialogContent = (
            <DiscAddedDialog
              logout={this.logoutHandler}
              success={this.handleSuccess}
              open={open}
              toggle={this.handleToggle}
            />
          );
        }
      } else {
        dialogContent = (
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogContent className={classes.dialog}>
              <DialogTitle>Login</DialogTitle>
              <DialogContentText>
                You must be an authorized user to add a disc
              </DialogContentText>
              <LoginForm
                email={this.state.email}
                password={this.state.password}
                dataHandler={this.handleChange}
                loginHandler={this.loginHandler}
              />
            </DialogContent>
          </Dialog>
        );
      }
    }

    return (
      <Fragment>
        <Fab size="small" color="secondary" onClick={this.handleToggle}>
          <Add />
        </Fab>
        {dialogContent}
      </Fragment>
    );
  }
}

AddDialog.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, logoutUser }
)(withStyles(styles)(AddDialog));
