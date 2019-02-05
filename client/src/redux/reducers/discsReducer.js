import { GET_DISCS } from "../actions/types";

const initialState = {
  discs: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISCS:
      return {
        ...state,
        discs: action.payload
      };
    default:
      return state;
  }
}
