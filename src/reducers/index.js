import LoggedInReducer from "./loggedin";
import { combineReducers } from "redux";
import CounterReducer from "./counter";

const allReducers = combineReducers({
  counter: CounterReducer,
  isLoggedState: LoggedInReducer,
});

export default allReducers;