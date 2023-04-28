import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./actionTypes";

const INITIAL_STATE = {
  isFetching: false,
  error: null,
};

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        isFetching: true,
        error: null,
      };
    case REQUEST_SUCCESS:
      return {
        isFetching: false,
        error: null,
      };
    case REQUEST_FAILURE:
      return {
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default requestReducer;
