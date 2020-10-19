import { combineReducers, createStore } from "redux";

import { countReducer } from "./modules/count";

declare global {
  interface IWindow {
    store: any;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  })
);

export default store;
