import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";

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

  componentDidMount() {
    this.setState({ auth: localStorage.getItem("Auth") });
  }

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

    axios
      .post("/api/users/login", userData)
      .then(res => {
        // Save to local storage
        const { token } = res.data;
        // Set token to local storage
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        localStorage.setItem("Auth", true);
        this.setState({ auth: true });
      })
      .catch(err => console.log(err));
  };

  logoutHandler = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("Auth");
    setAuthToken(false);
    this.setState({ auth: false });
  };

  render() {
    const { open, success, email, password } = this.state;
    const { values } = this.props;
    const isAuthenticated = this.state.auth;

    let dialogContent;

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
  values: PropTypes.array.isRequired
};

export default AddDialog;
