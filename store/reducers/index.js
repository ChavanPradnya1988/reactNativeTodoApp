import { combineReducers } from "redux";

// import counter from "./counter";
import todos from "./todos";
import profile from "./auth";

const rootReducer = combineReducers({
  todos,
  user: profile
});

export default rootReducer;
