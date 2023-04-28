import ProjectService from "../../../../services/ProjectService";
import { createRequestAction } from "../actions";

export const createProject = (name, isOpen) => {
  return createRequestAction(() => ProjectService.create(name, isOpen));
};

export const getUserProjects = () => {
  return createRequestAction(() => ProjectService.getUserProjects());
}
