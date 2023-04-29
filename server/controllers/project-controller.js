const projectService = require("../services/project-service");

class ProjectController {
  async create(req, res, next) {
    try {
      const { user } = req;
      const { name, isOpen } = req.body;

      const project = await projectService.create(user.id, name, isOpen);

      return res.json(project);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const projectId = req.params.id;
      const { user } = req;
      const { name, isOpen } = req.body;

      const project = await projectService.update(
        projectId,
        user.id,
        name,
        isOpen
      );

      return res.json(project);
    } catch (e) {
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      const projectId = req.params.id;
      const { user } = req;

      const project = await projectService.get(projectId, user.id);

      return res.json(project);
    } catch (e) {
      next(e);
    }
  }

  async getUserProjects(req, res, next) {
    try {
      const { user } = req;
      const projects = await projectService.getUserProjects(user.id);

      return res.json(projects);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const projectId = req.params.id;
      const { user } = req;

      const deletedProject = await projectService.delete(projectId, user.id);
      return res.json(deletedProject);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProjectController();
