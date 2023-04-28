import api from "../http";

export default class ProjectService {
  static async create(name, isOpen) {
    return api.post("/projects", {name, isOpen})
  }

  static async getUserProjects() {
    return api.get("/userProjects");
  }
}