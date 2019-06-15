import React from "react";
import {
  TextField,
  List,
  ListItem,
  Button,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

const LoginForm = ({ classes, email, password, dataHandler, loginHandler }) => {
  return (
    <form>
      <List>
        <ListItem>
          <TextField
            label="Email"
            className={classes.textField}
            value={email}
            onChange={dataHandler("email")}
            margin="normal"
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Password"
            type="password"
            className={classes.textField}
            value={password}
            onChange={dataHandler("password")}
            margin="normal"
          />
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={loginHandler}
          >
            Submit
          </Button>
        </ListItem>
      </List>
    </form>
  );
};

export default withStyles(styles)(LoginForm);
