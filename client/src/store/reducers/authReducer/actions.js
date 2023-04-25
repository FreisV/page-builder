import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
  payload: null,
});
