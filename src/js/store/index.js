import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import reducers from "../reducers";

import appMiddleware from "./middlewares/appMiddleware";

export default function configureStore() {
  const middlewares = [reduxThunk, appMiddleware];

  const rootReducer = (state, action) => {
    if (action.type === "AUTH_LOGOUT_SUCCESS") {
      Object.keys(state).forEach((sk) => {
        if (state[sk].savable) {
          return;
        }
        state[sk] = undefined;
      });
    }
    return reducers(state, action);
  };
  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}
