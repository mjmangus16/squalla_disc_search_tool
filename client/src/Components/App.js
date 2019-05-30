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

const filterRating = (rating, element, card) => {
  for (let i = 0; i < rating.length; i++) {
    let low = parseFloat(rating[i]) - 0.5;
    let high = parseFloat(rating[i]) + 0.5;

    if (parseFloat(element) >= low && parseFloat(element) < high) {
      card.style.display = "";
      break;
    } else {
      card.style.display = "none";
    }
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
    staticDiscs: [],
    filteredDiscs: [],
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
      this.setState(() => {
        return {
          staticDiscs: discs.data,
          filteredDiscs: shuffledArray(discs.data)
        };
      });
    });

    axios.get("/api/values/all").then(values => {
      this.setState(() => {
        return {
          values: values.data
        };
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

    if (manufactures.length > 0) {
      this.setState(prevState => {
        return {
          filteredDiscs: prevState.filteredDiscs.filter(disc =>
            manufactures.includes(disc.manufacture.toLowerCase())
          )
        };
      });
    }

    // const cards = document.querySelectorAll("#disc-card");

    // cards.forEach(card => {
    //   if (card.style.display !== "none") {
    //     if (manufactures.length > 0) {
    //       manufactures.includes(card.firstChild.firstChild.title.toLowerCase())
    //         ? (card.style.display = "")
    //         : (card.style.display = "none");
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (discType.length > 0) {
    //       discType.includes(
    //         card.lastChild.firstChild.firstChild.lastChild.textContent
    //       )
    //         ? (card.style.display = "")
    //         : (card.style.display = "none");
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (stability.length > 0) {
    //       stability.includes(card.lastChild.children[1].title)
    //         ? (card.style.display = "")
    //         : (card.style.display = "none");
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (speed.length > 0) {
    //       const el = card.lastChild.children[1].children[0].textContent;
    //       filterRating(speed, el, card);
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (glide.length > 0) {
    //       glide.forEach(num => {
    //         const el = card.lastChild.children[1].children[1].textContent;
    //         filterRating(glide, el, card);
    //       });
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (turn.length > 0) {
    //       turn.forEach(num => {
    //         const el = card.lastChild.children[1].children[2].textContent;
    //         filterRating(turn, el, card);
    //       });
    //     }
    //   }
    //   if (card.style.display !== "none") {
    //     if (fade.length > 0) {
    //       fade.forEach(num => {
    //         const el = card.lastChild.children[1].children[3].textContent;
    //         filterRating(fade, el, card);
    //       });
    //     }
    //   }
    // });
  };

  clear_button = () => {
    this.setState({
      filteredDiscs: this.state.staticDiscs,
      manufactureSelections: [],
      discTypeSelections: [],
      stabilitySelections: [],
      speedSelections: [],
      glideSelections: [],
      turnSelections: [],
      fadeSelections: []
    });
  };

  render() {
    const { classes } = this.props;
    const { filteredDiscs, values } = this.state;

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
          <Discs
            toggleRatingsStatus={this.state.toggleRatings}
            filteredDiscs={filteredDiscs}
          />
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
