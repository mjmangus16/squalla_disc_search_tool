import React, { Component, Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import axios from "axios";

import Header from "./Header";
import Drawer from "./header-actions/Drawer/Drawer";
import Discs from "./Discs/Discs";

import filterRating from "../utils/filterRating";
import shuffledArray from "../utils/shuffledArray";

const styles = theme => ({
  drawerOpen: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up("sm")]: {
      marginRight: 300
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      marginRight: "auto"
    }
  },
  drawerClosed: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});

class App extends Component {
  state = {
    staticDiscs: [],
    discs: [],
    showCount: 25,
    add_disc_open: false,
    drawer_open: true,
    toggleRatings: false,
    manufactureSelections: [],
    discTypeSelections: [],
    stabilitySelections: [],
    speedSelections: [],
    glideSelections: [],
    turnSelections: [],
    fadeSelections: [],
    values: [],
    compareDiscs: []
  };

  componentDidMount() {
    axios.get("/api/discs/all").then(discs => {
      this.setState({
        discs: shuffledArray(discs.data),
        staticDiscs: shuffledArray(discs.data)
      });
    });

    axios.get("/api/values/all").then(values => {
      this.setState({
        values: values.data
      });
    });
  }

  toggle_ratings = () => {
    this.setState({ toggleRatings: !this.state.toggleRatings });
  };

  add_disc_toggle = () => {
    this.setState({
      add_disc_open: !this.state.add_disc_open
    });
  };

  drawer_toggle = () => {
    this.setState({ drawer_open: !this.state.drawer_open });
  };

  filter_handlers = {
    manufacture: e => this.setState({ manufactureSelections: e.target.value }),
    type: e => this.setState({ discTypeSelections: e.target.value }),
    stability: e => this.setState({ stabilitySelections: e.target.value }),
    speed: e => this.setState({ speedSelections: e.target.value }),
    glide: e => this.setState({ glideSelections: e.target.value }),
    turn: e => this.setState({ turnSelections: e.target.value }),
    fade: e => this.setState({ fadeSelections: e.target.value }),
    count: e => this.setState({ showCount: e.target.value })
  };

  submit_button = () => {
    const manufactures = this.state.manufactureSelections.map(manuf =>
        manuf.toLowerCase()
      ),
      discType = this.state.discTypeSelections,
      stability = this.state.stabilitySelections,
      speed = this.state.speedSelections,
      glide = this.state.glideSelections,
      turn = this.state.turnSelections,
      fade = this.state.fadeSelections;

    let container = [...this.state.staticDiscs];

    if (manufactures.length > 0) {
      container = container.filter(disc =>
        manufactures.includes(disc.manufacture.toLowerCase())
      );
    }
    if (discType.length > 0) {
      container = container.filter(disc => discType.includes(disc.discType));
    }
    if (stability.length > 0) {
      container = container.filter(disc => stability.includes(disc.stability));
    }
    if (speed.length > 0) {
      if (this.state.toggleRatings === false) {
        container = container.filter(disc =>
          filterRating(speed, disc.infiniteRatings.speed)
        );
      } else if (this.state.toggleRatings === true) {
        container = container.filter(disc =>
          disc.manufactureRatings
            ? filterRating(speed, disc.manufactureRatings.speed)
            : false
        );
      }
    }

    if (glide.length > 0) {
      if (this.state.toggleRatings === false) {
        container = container.filter(disc =>
          filterRating(glide, disc.infiniteRatings.glide)
        );
      } else if (this.state.toggleRatings === true) {
        container = container.filter(disc =>
          disc.manufactureRatings
            ? filterRating(glide, disc.manufactureRatings.glide)
            : false
        );
      }
    }

    if (turn.length > 0) {
      if (this.state.toggleRatings === false) {
        container = container.filter(disc =>
          filterRating(turn, disc.infiniteRatings.turn)
        );
      } else if (this.state.toggleRatings === true) {
        container = container.filter(disc =>
          disc.manufactureRatings
            ? filterRating(turn, disc.manufactureRatings.turn)
            : false
        );
      }
    }

    if (fade.length > 0) {
      if (this.state.toggleRatings === false) {
        container = container.filter(disc =>
          filterRating(fade, disc.infiniteRatings.fade)
        );
      } else if (this.state.toggleRatings === true) {
        container = container.filter(disc =>
          disc.manufactureRatings
            ? filterRating(fade, disc.manufactureRatings.fade)
            : false
        );
      }
    }

    this.setState(() => {
      return {
        discs: container
      };
    });
  };

  clear_button = () => {
    this.setState({
      discs: [...this.state.staticDiscs],
      manufactureSelections: [],
      discTypeSelections: [],
      stabilitySelections: [],
      speedSelections: [],
      glideSelections: [],
      turnSelections: [],
      fadeSelections: []
    });
  };

  search_by_name = value => {
    this.setState(prevState => {
      return {
        discs: prevState.staticDiscs.filter(disc =>
          disc.discName.toLowerCase().includes(value.toLowerCase())
        )
      };
    });
  };

  addCompare = disc => {
    let alreadyAdded = false;
    this.state.compareDiscs.forEach(compareDisc => {
      if (compareDisc._id === disc._id) {
        alreadyAdded = true;
      }
    });
    if (alreadyAdded === false) {
      this.setState(() => {
        return {
          compareDiscs: [...this.state.compareDiscs, disc]
        };
      });
    }
  };

  removeCompare = disc => {
    this.setState({
      compareDiscs: [...this.state.compareDiscs].filter(
        item => item._id !== disc._id
      )
    });
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      showCount,
      compareDiscs,
      drawer_open,
      toggleRatings,
      manufactureSelections,
      discTypeSelections,
      stabilitySelections,
      speedSelections,
      glideSelections,
      turnSelections,
      fadeSelections
    } = this.state;
    const totalCount = this.state.discs.length;
    const discs = [...this.state.discs].splice(0, showCount);

    return (
      <Fragment>
        <CssBaseline />
        <Header drawerToggle={this.drawer_toggle} values={values} />
        <Drawer
          filterToggle={this.filter_toggle}
          filterStatus={drawer_open}
          toggleRatings={this.toggle_ratings}
          toggleRatingsStatus={toggleRatings}
          filterHandlers={this.filter_handlers}
          filterSelections={{
            manufacture: manufactureSelections,
            discType: discTypeSelections,
            stability: stabilitySelections,
            speed: speedSelections,
            glide: glideSelections,
            turn: turnSelections,
            fade: fadeSelections
          }}
          submitButton={this.submit_button}
          clearButton={this.clear_button}
          values={values}
          searchByName={this.search_by_name}
          showCount={showCount}
          totalCount={totalCount}
          compareDiscs={compareDiscs}
          removeCompare={this.removeCompare}
        />
        <div
          className={
            this.state.drawer_open ? classes.drawerOpen : classes.drawerClosed
          }
        >
          <Discs
            toggleRatingsStatus={this.state.toggleRatings}
            discs={discs}
            addCompare={this.addCompare}
          />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
