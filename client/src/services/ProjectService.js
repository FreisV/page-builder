import api from "../http";

export default class ProjectService {
  static async create(name, isOpen) {
    return api.post("/projects", { name, isOpen });
  }

  static async get(id) {
    return api.get(`/projects/${id}`);
  }

  static async update(id, name, isOpen) {
    return api.put(`/projects/${id}`, { name, isOpen });
  }

  static async delete(id) {
    return api.delete(`/projects/${id}`);
  }

  static async getUserProjects() {
    return api.get("/userProjects");
  }
}
