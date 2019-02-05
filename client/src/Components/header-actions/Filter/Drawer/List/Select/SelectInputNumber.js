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
    margin: "auto",
    width: 75
  }
});

class SelectInput extends Component {
  render() {
    const { classes, values, data, handleChange, selection } = this.props;

    return (
      <FormControl className={classes.formControl}>
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
