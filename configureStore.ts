import { combineReducers, createStore as reduxCreateStore } from "redux";

import CountReducer from "./modules/count";

declare global {
  interface IWindow {
    store: any;
  }
}

const createStore = () => {
  const store = reduxCreateStore(
    combineReducers({
      count: CountReducer,
    })
  );

  return store;
};

export default createStore;
