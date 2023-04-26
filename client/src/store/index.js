import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducers";
import {
  saveAccessTokenToLocalStorage,
  saveUserDataToLocalStorage,
} from "./reducers/authReducer/auth";

const loadFromLocalStorage = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      auth: {
        accessToken,
        user,
      },
    };
  } catch (e) {
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState,
});

store.subscribe(() => {
  console.log(store.getState());
  const { accessToken, user } = store.getState().auth;
  saveAccessTokenToLocalStorage(accessToken);
  saveUserDataToLocalStorage(user);
});

export default store;
