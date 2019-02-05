import { GET_VALUES } from "../actions/types";

const initialState = {
  values: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VALUES:
      return {
        ...state,
        values: action.payload
      };
    default:
      return state;
  }
}
