const ApiError = require("../exceptions/api-error");
const tokenService = require("../services/token-service");
const UserModel = require("../models/user-model");

module.exports = async function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    const user = await UserModel.findById(userData.id);
    if (!user.isActivated) {
      return next(ApiError.UnverifiedEmailError());
    }

    req.user = userData;
    next();
  } catch (e) {
    console.log(e);
    return next(ApiError.UnauthorizedError());
  }
};
