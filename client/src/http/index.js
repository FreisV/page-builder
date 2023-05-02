import axios from "axios";
import { logout, refreshData } from "../store/reducers/authReducer/actions";
import store from "../store";

export const API_URL = "http://localhost:5000/api";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const res = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        store.dispatch(refreshData(res.data));
        return api.request(originalRequest);
      } catch (e) {
        await store.dispatch(logout());
      }
    }
    throw error;
  }
);

export default api;
