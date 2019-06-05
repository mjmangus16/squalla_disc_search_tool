import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../../../redux/actions/authActions";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import AddDiscDialog from "./Dialogs/AddDiscDialog";
import DiscAddedDialog from "./Dialogs/DiscAddedDialog";
import LoginDialog from "./Dialogs/LoginDialog";

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
    const { open, success, email, password } = this.state;
    const { values } = this.props;
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
          <LoginDialog
            success={this.handleSuccess}
            open={open}
            toggle={this.handleToggle}
            email={email}
            password={password}
            dataHandler={this.handleChange}
            login={this.loginHandler}
          />
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
)(AddDialog);
