import React, { Component } from "react";
import {
  List,
  ListItem,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  GridList,
  withStyles,
  Typography,
  MenuItem,
  Select
} from "@material-ui/core";
import SelectInputText from "./Select/SelectInputText";
import SelectInputNumber from "./Select/SelectInputNumber";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  button: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: 75
    },
    [theme.breakpoints.down("sm")]: {
      width: 40,
      fontSize: ".75em"
    }
  },
  gridList: {
    flexWrap: "nowrap",
    width: "auto",
    margin: "auto",
    paddingLeft: 16,
    paddingRight: 16
  }
});

class ListComponent extends Component {
  render() {
    const {
      classes,
      toggleRatings,
      toggleRatingsStatus,
      selections,
      handlers,
      submitButton,
      clearButton,
      values,
      searchByName,
      totalCount,
      showCount
    } = this.props;

    let collectedValues = {};
    let listContent = [];

    if (values.length > 0) {
      values.forEach(value => {
        collectedValues[value.name] = value.data;
      });

      listContent = (
        <List component="ul">
          <ListItem>
            <Select
              value={showCount}
              onChange={handlers.count}
              inputProps={{
                name: "Count",
                id: "count-simple"
              }}
              style={{
                width: 60,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={75}>75</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={125}>125</MenuItem>
            </Select>
            <Typography
              style={{ paddingTop: 6, fontSize: "1rem", color: "lightgrey" }}
            >{` of ${totalCount}`}</Typography>
          </ListItem>

          <ListItem>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={toggleRatingsStatus}
                    onChange={toggleRatings}
                    value="checkedA"
                  />
                }
                label={
                  toggleRatingsStatus === false
                    ? "Infinite Ratings"
                    : "Manufacture Ratings"
                }
              />
            </FormGroup>
          </ListItem>
          <ListItem>
            <TextField
              className={classes.textField}
              label="Search by name"
              id="name-search"
              onChange={e => searchByName(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <SelectInputText
              values={collectedValues.manufactures}
              handleChange={handlers.manufacture}
              selection={selections.manufacture}
              data="Manufacture"
            />
          </ListItem>
          <ListItem>
            <SelectInputText
              values={collectedValues.discTypes}
              handleChange={handlers.type}
              selection={selections.discType}
              data="Type"
            />
          </ListItem>
          <ListItem>
            <SelectInputText
              values={collectedValues.stability}
              handleChange={handlers.stability}
              selection={selections.stability}
              data="Stability"
            />
          </ListItem>
          <GridList cellHeight={86} spacing={0} className={classes.gridList}>
            <ListItem style={{ margin: "auto", width: "auto" }}>
              <SelectInputNumber
                values={collectedValues.speed}
                handleChange={handlers.speed}
                selection={selections.speed}
                data="Speed"
              />
            </ListItem>
            <ListItem style={{ margin: "auto", width: "auto" }}>
              <SelectInputNumber
                values={collectedValues.glide}
                handleChange={handlers.glide}
                selection={selections.glide}
                data="Glide"
              />
            </ListItem>
          </GridList>
          <GridList cellHeight={86} spacing={0} className={classes.gridList}>
            <ListItem style={{ margin: "auto", width: "auto" }}>
              <SelectInputNumber
                values={collectedValues.turn}
                handleChange={handlers.turn}
                selection={selections.turn}
                data="Turn"
              />
            </ListItem>
            <ListItem style={{ margin: "auto", width: "auto" }}>
              <SelectInputNumber
                values={collectedValues.fade}
                handleChange={handlers.fade}
                selection={selections.fade}
                data="Fade"
              />
            </ListItem>
          </GridList>
          <ListItem style={{ width: "100%", margin: "auto" }}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={submitButton}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={clearButton}
            >
              Clear
            </Button>
          </ListItem>
        </List>
      );
    }

    return listContent;
  }
}

export default withStyles(styles)(ListComponent);
