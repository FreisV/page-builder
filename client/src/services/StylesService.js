import api from "../http";

export default class StylesService {
  static async get(projectId) {
    return api.get(`/projects/${projectId}/styles`);
  }

  static async update(projectId, stylesData) {
    return api.put(`/projects/${projectId}/styles`, stylesData);
  }

  static async getOne(projectId, blockId) {
    return api.get(`/projects/${projectId}/styles/${blockId}`);
  }
}
