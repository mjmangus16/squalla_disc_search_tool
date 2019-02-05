import axios from "axios";

import { GET_DISCS } from "./types";

// Get all discs
export const getDiscs = () => dispatch => {
  axios
    .get("/api/discs/all")
    .then(res => {
      dispatch({
        type: GET_DISCS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_DISCS,
        payload: {}
      });
    });
};
