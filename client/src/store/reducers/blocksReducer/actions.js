import BlockService from "../../../services/BlockService";
import {
  REQUEST_START,
  GET_BLOCKS_SUCCESS,
  CREATE_BLOCK_SUCCESS,
  UPDATE_BLOCK_SUCCESS,
  DELETE_BLOCK_SUCCESS,
  REQUEST_FAILURE,
} from "./actionTypes";

export const requestStart = () => ({
  type: REQUEST_START,
});

export const getBlocksSuccess = (payload) => ({
  type: GET_BLOCKS_SUCCESS,
  payload,
});
export const createBlockSuccess = (payload) => ({
  type: CREATE_BLOCK_SUCCESS,
  payload,
});
export const updateBlockSuccess = (payload) => ({
  type: UPDATE_BLOCK_SUCCESS,
  payload,
});
export const deleteBlockSuccess = (payload) => ({
  type: DELETE_BLOCK_SUCCESS,
  payload,
});

export const requestFailure = (payload) => ({
  type: REQUEST_FAILURE,
  payload,
});

export const getBlocks = (projectId) => async (dispatch) => {
  dispatch(requestStart());
  try {
    const res = await BlockService.getBlocks(projectId);
    dispatch(getBlocksSuccess(res.data));
  } catch (e) {
    const error = {
      status: e.response.status,
      message: e.response.data.message,
    };
    dispatch(requestFailure(error));
  }
};

export const createBlock = (projectId, blockData) => async (dispatch) => {
  dispatch(requestStart());
  try {
    const res = await BlockService.create(projectId, blockData);
    dispatch(createBlockSuccess(res.data));
  } catch (e) {
    const error = {
      status: e.response.status,
      message: e.response.data.message,
    };
    dispatch(requestFailure(error));
  }
};

export const updateBlock = (projectId, blockData) => async (dispatch) => {
  dispatch(requestStart());
  try {
    const res = await BlockService.update(projectId, blockData);
    dispatch(updateBlockSuccess(res.data));
  } catch (e) {
    const error = {
      status: e.response.status,
      message: e.response.data.message,
    };
    dispatch(requestFailure(error));
  }
};

export const deleteBlock = (projectId, blockId) => async (dispatch) => {
  dispatch(requestStart());
  try {
    const res = await BlockService.delete(projectId, blockId);
    dispatch(deleteBlockSuccess(res.data));
  } catch (e) {
    const error = {
      status: e.response.status,
      message: e.response.data.message,
    };
    dispatch(requestFailure(error));
  }
};
