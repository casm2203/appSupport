import { combineReducers } from "redux";
import responsive from "./responsiveReducer";
import sesion from "./sesionReducer";

export default combineReducers({
  responsive,
  sesion,
});
