const ApiError = require("../exceptions/api-error");
const ProjectModel = require("../models/project-model");

module.exports = async function (req, res, next) {
  try {
    const projectId = req.params.id;
    const { user } = req;

    const project = await ProjectModel.findById(projectId);
    if (!project) {
      return next(ApiError.BadRequest("Такого проекта не существует"));
    }

    if (project.owner != user.id) {
      return next(ApiError.AccessDenied());
    }

    next();
  } catch (e) {
    next(e);
  }
};
