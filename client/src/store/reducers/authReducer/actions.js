import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";
import AuthService from "../../../services/AuthService";

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

export const login = (username, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    console.log("here");
    const res = await AuthService.login(username, password);
    console.log("here2");
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
