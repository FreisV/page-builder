import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

const INITIAL_STATE = {
  accessToken: JSON.parse(localStorage.getItem("token")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        accessToken: null,
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        accessToken: action.payload.token,
        user: action.payload.user,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        accessToken: null,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        accessToken: null,
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default authReducer;
