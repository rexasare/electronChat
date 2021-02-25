import { combineReducers } from "redux";

import { APP_IS_OFFLINE, APP_IS_ONLINE } from "../actions/types";

function createAppReducer() {
  const { onLine } = navigator;
  const isOnline = (state = onLine, action) => {
    switch (action.type) {
      case APP_IS_ONLINE:
      case APP_IS_OFFLINE:
        return action.isOnLine;
      default:
        return state;
    }
  };

  return combineReducers({
    isOnline,
  });
}

export default createAppReducer();
