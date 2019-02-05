import axios from "axios";

import { GET_VALUES } from "./types";

// Get all values
export const getValues = () => dispatch => {
  axios
    .get("/api/values/all")
    .then(res => {
      dispatch({
        type: GET_VALUES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_VALUES,
        payload: {}
      });
    });
};
