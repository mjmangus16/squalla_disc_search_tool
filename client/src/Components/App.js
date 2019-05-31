import React, { Component, Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import axios from "axios";

import Header from "./Layout/Header";
import Drawer from "./header-actions/Filter/Drawer/Drawer";
import Discs from "./Discs/Discs";

const styles = theme => ({
  filterOpen: {
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
  filterClosed: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});

const filterRating = (rating, num) => {
  if (num) {
    for (let i = 0; i < rating.length; i++) {
      let low = parseFloat(rating[i]) - 0.5;
      let high = parseFloat(rating[i]) + 0.5;

      if (parseFloat(num) >= low && parseFloat(num) < high) {
        return true;
      }
    }
  } else {
    return false;
  }
};

const shuffledArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

class App extends Component {
  state = {
    discs: [],
    add_disc_open: false,
    filter_open: true,
    toggleRatings: false,
    manufactureSelections: [],
    discTypeSelections: [],
    stabilitySelections: [],
    speedSelections: [],
    glideSelections: [],
    turnSelections: [],
    fadeSelections: [],
    values: []
  };

  componentDidMount() {
    axios.get("/api/discs/all").then(discs => {
      this.setState({
        discs: shuffledArray(discs.data)
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

  filter_toggle = () => {
    if (this.state.filter_open === false) {
      this.setState({
        filter_open: true
      });
    } else {
      this.setState({
        filter_open: false
      });
    }
  };

  filter_handlers = {
    manufacture: e => this.setState({ manufactureSelections: e.target.value }),
    type: e => this.setState({ discTypeSelections: e.target.value }),
    stability: e => this.setState({ stabilitySelections: e.target.value }),
    speed: e => this.setState({ speedSelections: e.target.value }),
    glide: e => this.setState({ glideSelections: e.target.value }),
    turn: e => this.setState({ turnSelections: e.target.value }),
    fade: e => this.setState({ fadeSelections: e.target.value })
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

    let container = [...this.state.discs];

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
      manufactureSelections: [],
      discTypeSelections: [],
      stabilitySelections: [],
      speedSelections: [],
      glideSelections: [],
      turnSelections: [],
      fadeSelections: []
    });

    axios.get("/api/discs/all").then(discs => {
      this.setState({
        discs: shuffledArray(discs.data)
      });
    });
  };

  render() {
    const { classes } = this.props;
    const { discs, values } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <Header filterToggle={this.filter_toggle} />
        <Drawer
          filterToggle={this.filter_toggle}
          filterStatus={this.state.filter_open}
          toggleRatings={this.toggle_ratings}
          toggleRatingsStatus={this.state.toggleRatings}
          filterHandlers={this.filter_handlers}
          filterSelections={{
            manufacture: this.state.manufactureSelections,
            discType: this.state.discTypeSelections,
            stability: this.state.stabilitySelections,
            speed: this.state.speedSelections,
            glide: this.state.glideSelections,
            turn: this.state.turnSelections,
            fade: this.state.fadeSelections
          }}
          submitButton={this.submit_button}
          clearButton={this.clear_button}
          values={values}
        />
        <div
          className={
            this.state.filter_open ? classes.filterOpen : classes.filterClosed
          }
        >
          <Discs toggleRatingsStatus={this.state.toggleRatings} discs={discs} />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
