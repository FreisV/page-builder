import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from "./actionTypes";

export const requestStart = () => ({
  type: REQUEST_START,
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS,
});

export const requestFailure = (payload) => ({
  type: REQUEST_FAILURE,
  payload
});

export const createRequestAction = (requestFunction) => {
  return async (dispatch) => {
    dispatch(requestStart());

    try {
      const res = await requestFunction();
      dispatch(requestSuccess());
      return res.data;
    } catch (e) {
      const error = {
        status: e.response.status,
        message: e.response.data.message,
      };
      dispatch(requestFailure(error));
    }
  };
};
