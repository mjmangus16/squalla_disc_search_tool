import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      width: 75
    },
    [theme.breakpoints.down("sm")]: {
      width: 65
    }
  }
});

class SelectInput extends Component {
  render() {
    const { classes, values, data, handleChange, selection } = this.props;

    return (
      <FormControl
        className={classes.formControl}
        style={
          data === "Count" ? { marginTop: 0, paddingTop: 0, width: 65 } : {}
        }
      >
        <InputLabel htmlFor="select-multiple-checkbox">{data}</InputLabel>
        <Select
          multiple
          value={selection}
          onChange={handleChange}
          renderValue={selected => selected.join(", ")}
          inputProps={{
            name: data,
            id: `${data}-native-simple`
          }}
        >
          {values.map(value => (
            <MenuItem key={values.indexOf(value)} value={value}>
              <Checkbox checked={selection.indexOf(value) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectInput);
