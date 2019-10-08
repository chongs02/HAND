import auth from "./auth";
import notes from "./notes";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  notes,
  auth
});

export default rootReducer;
