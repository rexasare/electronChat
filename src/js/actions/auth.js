import * as api from "../api/auth";

import {
  AUTH_REGISTER_SUCCESS,
  AUTH_ON_SUCCESS,
  AUTH_ON_INIT,
  AUTH_ON_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_INIT,
  AUTH_LOGIN_INIT,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER_ERROR,
} from "./types";

export const registerUser = (formData) => (dispatch) => {
  dispatch({ type: AUTH_REGISTER_INIT });
  return api
    .register(formData)
    .then((user) => dispatch({ type: AUTH_REGISTER_SUCCESS, payload: user }))
    .catch((error) => dispatch({ type: AUTH_REGISTER_ERROR, error }));
};

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: AUTH_ON_INIT });
  api.onAuthStateChanges(async (authUser) => {
    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid);
      dispatch({ type: AUTH_ON_SUCCESS, payload: userProfile });
    } else {
      dispatch({ type: AUTH_ON_ERROR });
    }
  });
};

export const logout = () => (dispatch) => {
  api.logout().then((_) => dispatch({ type: AUTH_LOGOUT_SUCCESS }));
};

export const loginUser = (formData) => (dispatch) => {
  dispatch({ type: AUTH_LOGIN_INIT });
  return api
    .login(formData)
    .then((user) => dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user }))
    .catch((error) => dispatch({ type: AUTH_LOGIN_ERROR, error }));
};
