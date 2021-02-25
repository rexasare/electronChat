import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import reducers from "../reducers";

import appMiddleware from "./middlewares/appMiddleware";

export default function configureStore() {
  const middlewares = [reduxThunk, appMiddleware];
  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}
