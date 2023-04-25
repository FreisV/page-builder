export const saveAccessTokenToLocalStorage = (token) => {
  localStorage.setItem("accessToken", token);
};

export const saveUserDataToLocalStorage = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};
