import axios from "axios";

import { GET_DISCS } from "./types";

// Get all discs
export const getDiscs = () => dispatch => {
  axios
    .get("/api/discs/all")
    .then(res => {
      dispatch({
        type: GET_DISCS,
        payload: shuffledArray(res.data)
      });
    })
    .catch(err => {
      dispatch({
        type: GET_DISCS,
        payload: {}
      });
    });
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
