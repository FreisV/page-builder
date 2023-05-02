import api from "../http";

export default class BlockService {
  static async create(projectId, blockData) {
    return api.post(`/projects/${projectId}/blocks`, blockData);
  }

  static async update(projectId, blockData) {
    return api.put(`/projects/${projectId}/blocks`, blockData);
  }

  static async getBlocks(projectId) {
    return api.get(`/projects/${projectId}/blocks`);
  }

  static async getBlock(projectId, blockId) {
    return api.get(`/projects/${projectId}/blocks/${blockId}`);
  }

  static async delete(projectId, blockId) {
    return api.delete(`/projects/${projectId}/blocks/${blockId}`);
  }
}
