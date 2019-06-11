import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  List,
  ListItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  Snackbar,
  SnackbarContent,
  withStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  expansionItem: {
    width: "100%",
    paddingRight: 5,
    paddingLeft: 5
  },
  expansionPanel: {
    width: "100%"
  },
  flexWrap: {
    flexWrap: "wrap"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  ratingField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50
  },
  listItem1: {
    height: 65
  },
  button: {
    margin: theme.spacing.unit
  },
  snackbar: {
    margin: theme.spacing.unit
  }
});

class Form extends Component {
  state = {
    name: "",
    manufacture: "",
    type: "",
    stability: "",
    iSpeed: "",
    iGlide: "",
    iTurn: "",
    iFade: "",
    mSpeed: "",
    mGlide: "",
    mTurn: "",
    mFade: "",
    link: "",
    snackbar: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbar: false });
  };

  submitDisc = () => {
    const newDisc = {
      discName: this.state.name,
      manufacture: this.state.manufacture,
      discType: this.state.type,
      stability: this.state.stability,

      iSpeed: this.state.iSpeed,
      iGlide: this.state.iGlide,
      iTurn: this.state.iTurn,
      iFade: this.state.iFade,

      link: this.state.link
    };

    if (this.state.mSpeed !== "") {
      newDisc.mSpeed = this.state.mSpeed;
      newDisc.mGlide = this.state.mGlide;
      newDisc.mTurn = this.state.mTurn;
      newDisc.mFade = this.state.mFade;
    }

    if (
      newDisc.discname !== "" &&
      newDisc.manufacture !== "" &&
      newDisc.discType !== "" &&
      newDisc.stability !== "" &&
      newDisc.iSpeed !== "" &&
      newDisc.iGlide !== "" &&
      newDisc.iTurn !== "" &&
      newDisc.iFade !== "" &&
      newDisc.link !== ""
    ) {
      if (
        newDisc.mSpeed !== "" ||
        newDisc.mGlide !== "" ||
        newDisc.mTurn !== "" ||
        newDisc.mFade !== ""
      ) {
        if (
          newDisc.mSpeed !== "" &&
          newDisc.mGlide !== "" &&
          newDisc.mTurn !== "" &&
          newDisc.mFade !== ""
        ) {
          axios.post("/api/discs/add", newDisc);
          this.props.success();
          this.setState({ snackbar: false });
        } else {
          this.setState({ snackbar: true });
        }
      } else {
        axios.post("/api/discs/add", newDisc);
        this.props.success();
        this.setState({ snackbar: false });
      }
    } else {
      this.setState({ snackbar: true });
    }
  };

  clearInputs = () => {
    this.setState({
      name: "",
      manufacture: "",
      type: "",
      stability: "",
      iSpeed: "",
      iGlide: "",
      iTurn: "",
      iFade: "",
      mSpeed: "",
      mGlide: "",
      mTurn: "",
      mFade: "",
      link: "",
      snackbar: false
    });
  };

  render() {
    const { classes, values } = this.props;
    let collectedValues = {};
    console.log(values);
    if (values.length > 0) {
      values.forEach(value => {
        collectedValues[value.name] = value.data;
      });
    }

    return (
      <form>
        <List>
          <ListItem className={classes.listItem1}>
            <TextField
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </ListItem>

          <ListItem className={classes.listItem1}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Manufacture</InputLabel>
              <Select
                value={this.state.manufacture}
                onChange={this.handleChange("manufacture")}
                inputProps={{
                  name: "manufactures",
                  id: "manufacture-simple"
                }}
              >
                {collectedValues.manufactures.map(m => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem className={classes.listItem1}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="type-simple">Type</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.handleChange("type")}
                inputProps={{
                  name: "types",
                  id: "type-simple"
                }}
              >
                {collectedValues.discTypes.map(t => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem className={classes.listItem1}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="stability-simple">Stability</InputLabel>
              <Select
                value={this.state.stability}
                onChange={this.handleChange("stability")}
                inputProps={{
                  name: "stability's",
                  id: "stability-simple"
                }}
              >
                {collectedValues.stability.map(s => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem className={classes.expansionItem}>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>
                  Infinite Ratings
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.flexWrap}>
                <TextField
                  label="Speed"
                  className={classes.ratingField}
                  value={this.state.iSpeed}
                  onChange={this.handleChange("iSpeed")}
                  margin="normal"
                />
                <TextField
                  label="Glide"
                  className={classes.ratingField}
                  value={this.state.iGlide}
                  onChange={this.handleChange("iGlide")}
                  margin="normal"
                />
                <TextField
                  label="Turn"
                  className={classes.ratingField}
                  value={this.state.iTurn}
                  onChange={this.handleChange("iTurn")}
                  margin="normal"
                />
                <TextField
                  label="Fade"
                  className={classes.ratingField}
                  value={this.state.iFade}
                  onChange={this.handleChange("iFade")}
                  margin="normal"
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ListItem>
          <ListItem className={classes.expansionItem}>
            <ExpansionPanel className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>
                  Manufacture Ratings (optional)
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.flexWrap}>
                <TextField
                  label="Speed"
                  className={classes.ratingField}
                  value={this.state.mSpeed}
                  onChange={this.handleChange("mSpeed")}
                  margin="normal"
                />
                <TextField
                  label="Glide"
                  className={classes.ratingField}
                  value={this.state.mGlide}
                  onChange={this.handleChange("mGlide")}
                  margin="normal"
                />
                <TextField
                  label="Turn"
                  className={classes.ratingField}
                  value={this.state.mTurn}
                  onChange={this.handleChange("mTurn")}
                  margin="normal"
                />
                <TextField
                  label="Fade"
                  className={classes.ratingField}
                  value={this.state.mFade}
                  onChange={this.handleChange("mFade")}
                  margin="normal"
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ListItem>
          <ListItem className={classes.listItem1}>
            <TextField
              label="Link"
              className={classes.textField}
              value={this.state.link}
              onChange={this.handleChange("link")}
              margin="normal"
            />
          </ListItem>
          <ListItem className={classes.listItem1}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              onClick={this.submitDisc}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={this.clearInputs}
            >
              Clear
            </Button>
          </ListItem>
        </List>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          open={this.state.snackbar}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
        >
          <SnackbarContent
            className={classes.snackbar}
            message="All fields not marked optional must be filled out"
          />
        </Snackbar>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
