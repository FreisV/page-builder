import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import requestReducer from "./requestReducer/requestReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  requset: requestReducer,
});
