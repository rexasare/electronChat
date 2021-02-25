import { combineReducers } from "redux";

import {
  AUTH_ON_INIT,
  AUTH_ON_SUCCESS,
  AUTH_ON_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS,
} from "../actions/types";

import { createErrorReducer, createIsFetchingReducer } from "./common";

const USER_INITIAL_STATE = null;
const CHECKING_INITAL_STATE = false;

const createLoginReducer = () =>
  combineReducers({
    error: createErrorReducer("AUTH_LOGIN"),
    isChecking: createIsFetchingReducer("AUTH_LOGIN"),
  });

const createRegisterReducer = () =>
  combineReducers({
    error: createErrorReducer("AUTH_REGISTER"),
    isChecking: createIsFetchingReducer("AUTH_REGISTER"),
  });

function createAuthReducer() {
  const user = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) {
      case AUTH_ON_INIT:
      case AUTH_ON_ERROR:
        return null;
      case AUTH_ON_SUCCESS:
      case AUTH_LOGIN_SUCCESS:
      case AUTH_REGISTER_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };

  return combineReducers({
    user,
    isChecking: createIsFetchingReducer("AUTH_ON"),
    login: createLoginReducer(),
    register: createRegisterReducer(),
  });
}

export default createAuthReducer();
