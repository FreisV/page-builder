import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REFRESH_DATA,
} from "./actionTypes";
import AuthService from "../../../services/AuthService";

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const refreshData = (payload) => ({
  type: REFRESH_DATA,
  payload
})

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT,
  payload: null,
});

export const login = (username, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await AuthService.login(username, password);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const registration = (username, email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await AuthService.registration(username, email, password);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await AuthService.logout();
    dispatch(logoutAction());
  } catch (e) {
    console.log(e);
  } 
}