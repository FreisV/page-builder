import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REFRESH_DATA,
} from "./actionTypes";

const INITIAL_STATE = {
  accessToken: localStorage.getItem("accessToken") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
    case REFRESH_DATA:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
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
