import { combineReducers } from "redux";
import discsReducer from "./discsReducer";
import valuesReducer from "./valuesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  discs: discsReducer,
  values: valuesReducer
});
