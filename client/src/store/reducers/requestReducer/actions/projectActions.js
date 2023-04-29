import ProjectService from "../../../../services/ProjectService";
import { createRequestAction } from "../actions";

export const createProject = (name, isOpen) => {
  return createRequestAction(() => ProjectService.create(name, isOpen));
};

export const getProject = (id) => {
  return createRequestAction(() => ProjectService.get(id));
};

export const updateProject = (id, name, isOpen) => {
  return createRequestAction(() => ProjectService.update(id, name, isOpen));

}

export const deleteProject = (id) => {
  return createRequestAction(() => ProjectService.delete(id));
};

export const getUserProjects = () => {
  return createRequestAction(() => ProjectService.getUserProjects());
};
