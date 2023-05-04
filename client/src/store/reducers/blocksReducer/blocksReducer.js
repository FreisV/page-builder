import {
  REQUEST_START,
  GET_BLOCKS_SUCCESS,
  CREATE_BLOCK_SUCCESS,
  UPDATE_BLOCK_SUCCESS,
  DELETE_BLOCK_SUCCESS,
  GET_STYLES_SUCCESS,
  UPDATE_STYLES_SUCCESS,
  GET_BLOCK_STYLES_SUCCESS,
  REQUEST_FAILURE,
} from "./actionTypes";

const INITIAL_STATE = {
  blocks: [],
  blocksStyles: [],
  isFetching: false,
  error: null,
};

const blockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case GET_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.payload,
        isFetching: false,
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
        isFetching: false,
        error: null,
      };

    case UPDATE_BLOCK_SUCCESS:
      return {
        ...state,
        blocks: state.blocks.map((block) =>
          block.id === action.payload.id ? action.payload : block
        ),
        isFetching: false,
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
        blocksStyles: state.blocksStyles.filter(
          (style) => style.blockId !== action.payload.id
        ),
        isFetching: false,
        error: null,
      };

    case GET_STYLES_SUCCESS:
      return {
        ...state,
        blocksStyles: action.payload,
        isFetching: false,
        error: null,
      };

    case UPDATE_STYLES_SUCCESS:
      return {
        ...state,
        blocksStyles: state.blocksStyles.map((style) =>
          style.id === action.payload.id ? action.payload : style
        ),
        isFetching: false,
        error: null,
      };

    case GET_BLOCK_STYLES_SUCCESS:
      return {
        ...state,
        blocksStyles: [...state.blocksStyles, action.payload],
        isFetching: false,
        error: null,
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default blockReducer;
