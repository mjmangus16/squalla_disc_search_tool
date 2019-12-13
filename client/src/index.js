import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import { green, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900]
    },
    secondary: {
      main: green[400],
      light: green[200],
      dark: green[600]
    },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
