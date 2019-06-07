import React, { Component } from "react";
import { Drawer, Tabs, Tab, withStyles, Badge } from "@material-ui/core";
import List from "./List/List";
import Compare from "./Compare/Compare";

const styles = theme => ({
  drawer: {
    height: "calc(100% - 64px)",
    marginTop: 64,
    [theme.breakpoints.up("xs")]: {
      width: 300
    },
    [theme.breakpoints.down("xs")]: {
      width: 195,
      maxWidth: 195
    }
  },
  tabs: {
    width: "100%"
  },
  badge: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.7)",
    [theme.breakpoints.up("xs")]: {
      top: 80,
      right: 35
    },
    [theme.breakpoints.down("xs")]: {
      top: 80,
      right: 10
    }
  }
});

class DrawerComponent extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      filterStatus,
      filterToggle,
      toggleRatings,
      toggleRatingsStatus,
      filterHandlers,
      filterSelections,
      submitButton,
      clearButton,
      values,
      searchByName,
      totalCount,
      showCount,
      compareDiscs,
      removeCompare
    } = this.props;
    const { value } = this.state;

    let content;

    if (value === 0) {
      content = (
        <List
          toggleRatingsStatus={toggleRatingsStatus}
          toggleRatings={toggleRatings}
          handlers={filterHandlers}
          selections={filterSelections}
          submitButton={submitButton}
          clearButton={clearButton}
          values={values}
          searchByName={searchByName}
          totalCount={totalCount}
          showCount={showCount}
        />
      );
    } else {
      content = (
        <Compare
          discs={compareDiscs}
          removeCompare={removeCompare}
          toggleRatingsStatus={toggleRatingsStatus}
        />
      );
    }

    return (
      <Drawer
        anchor="right"
        variant="persistent"
        open={filterStatus}
        onClose={filterToggle}
        className={classes.drawerContainer}
      >
        <div tabIndex={0} role="button" className={classes.drawer}>
          <Badge badgeContent={compareDiscs.length} className={classes.badge} />
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={this.handleChange}
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Filter" />
            <Tab label="Compare" />
          </Tabs>
          {content}
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerComponent);
