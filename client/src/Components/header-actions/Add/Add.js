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
import AddForm from "./AddForm";
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
    password: ""
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
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;

    let dialogContent;

    if (Object.keys(this.props.auth).length > 0) {
      if (isAuthenticated) {
        if (!success) {
          dialogContent = (
            <Dialog open={open} onClose={this.handleToggle}>
              <Button
                size="small"
                onClick={this.logoutHandler}
                className={classes.logout}
              >
                Logout
              </Button>
              <DialogContent className={classes.dialog}>
                <DialogTitle>Add A Disc</DialogTitle>
                <DialogContentText>
                  Please fill out the form below
                </DialogContentText>
                <AddForm success={this.handleSuccess} />
              </DialogContent>
            </Dialog>
          );
        } else {
          dialogContent = (
            <Dialog open={open} onClose={this.handleToggle}>
              <Button
                size="small"
                onClick={this.logoutHandler}
                className={classes.logout}
              >
                Logout
              </Button>
              <DialogContent className={classes.dialog}>
                <DialogTitle>Success!</DialogTitle>
                <DialogContentText>
                  That disc has been added to the database
                </DialogContentText>
                <Button onClick={this.handleSuccess}>Add another disc</Button>
              </DialogContent>
            </Dialog>
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
