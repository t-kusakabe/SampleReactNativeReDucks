import { combineReducers, createStore } from "redux";

import { countReducer } from "./modules/count";

const store = createStore(
  combineReducers({
    count: countReducer
  })
);

export default store;
