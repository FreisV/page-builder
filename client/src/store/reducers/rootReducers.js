import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import requestReducer from "./requestReducer/requestReducer";
import blockReducer from "./blocksReducer/blocksReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  requset: requestReducer,
  blocks: blockReducer,
});
