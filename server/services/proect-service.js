const ProjectModel = require("../models/project-model");
const ApiError = require("../exceptions/api-error");
const ProjectDto = require("../dtos/project-dto");

class ProjectService {
  async create(userId, name, isOpen) {
    const projectCandidate = await ProjectModel.findOne({
      name,
      owner: userId,
    });
    if (projectCandidate) {
      throw ApiError.BadRequest(`Проект ${name} уже существует`);
    }

    const project = await ProjectModel.create({
      owner: userId,
      name,
      isOpen,
    });

    const projectDto = new ProjectDto(project);

    return projectDto;
  }

  async update(id, userId, name, isOpen) {
    const project = await ProjectModel.findById(id);
    if (!project) {
      throw ApiError.BadRequest("Такого проекта не существует");
    }

    if (project.owner != userId) {
      throw ApiError.BadRequest("Вы не можете редактировать чужой проект");
    }

    await project.updateOne({ $set: { name, isOpen } });

    const updatedProject = await ProjectModel.findById(id);
    const projectDto = new ProjectDto(updatedProject);

    return projectDto;
  }

  async get(id, userId) {
    const project = await ProjectModel.findById(id);
    if (!project) {
      throw ApiError.BadRequest("Такого проекта не существует");
    }

    const projectDto = new ProjectDto(project);

    if (project.isOpen) {
      return projectDto;
    }

    if (project.owner != userId) {
      throw ApiError.BadRequest("У вас нет доступа к данному проекту");
    }

    return projectDto;
  }

  async getUserProjects(userId) {
    const projects = await ProjectModel.find({ owner: userId });

    const projectsDtos = projects.map((project) => new ProjectDto(project));
    return projectsDtos;
  }

  async delete(id, userId) {
    const project = await ProjectModel.findById(id);
    if (!project) {
      throw ApiError.BadRequest("Такого проекта не существует");
    }

    if (project.owner != userId) {
      throw ApiError.BadRequest("Вы не можете удалить чужой проект");
    }

    const deletedProject = await project.deleteOne();
    return deletedProject;
  }
}

module.exports = new ProjectService();
