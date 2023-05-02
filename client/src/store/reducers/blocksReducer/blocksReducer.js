import {
  REQUEST_START,
  GET_BLOCKS_SUCCESS,
  CREATE_BLOCK_SUCCESS,
  UPDATE_BLOCK_SUCCESS,
  DELETE_BLOCK_SUCCESS,
  REQUEST_FAILURE,
} from "./actionTypes";

const INITIAL_STATE = {
  blocks: [],
  isFetching: false,
  error: null,
};

const blockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.payload,
        loading: false,
        error: null,
      };

    case CREATE_BLOCK_SUCCESS:
      return {
        ...state,
        blocks: [
          ...state.blocks.map((block) =>
            block.blockNumber >= action.payload.blockNumber
              ? { ...block, blockNumber: block.blockNumber + 1 }
              : block
          ),
          action.payload,
        ].sort((a, b) => a.blockNumber - b.blockNumber),
        loading: false,
        error: null,
      };

    case UPDATE_BLOCK_SUCCESS:
      return {
        ...state,
        blocks: state.blocks.map((block) =>
          block.id === action.payload.id ? action.payload : block
        ),
        loading: false,
        error: null,
      };

    case DELETE_BLOCK_SUCCESS:
      return {
        ...state,
        blocks: state.blocks
          .filter((block) => block.id !== action.payload.id)
          .map((block) =>
            block.blockNumber > action.payload.blockNumber
              ? { ...block, blockNumber: block.blockNumber - 1 }
              : block
          ),
        loading: false,
        error: null,
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default blockReducer;
