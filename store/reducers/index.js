import { combineReducers } from "redux";

// import counter from "./counter";
import todos from "./todos";
import auth from "./auth";


const rootReducer = combineReducers({
  todos,
  auth
});

export default rootReducer;
