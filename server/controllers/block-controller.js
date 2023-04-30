const ApiError = require("../exceptions/api-error");
const blockService = require("../services/block-service") 

class BlockController {
  async create(req, res, next) {
    try {
      const projectId = req.params.id;
      const data = req.body;

      data.projectId = projectId;

      const block = await blockService.create(data);

      res.json(block);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const projectId = req.params.id;
      const data = req.body;
      
      data.projectId = projectId;

      const block = await blockService.update(data);

      res.json(block);
    } catch (e) {
      next(e);
    }
  }

  async getBlocks(req, res, next) {
    try {
      const projectId = req.params.id;

      const block = await blockService.getBlocks(projectId);

      res.json(block);
    } catch (e) {
      next(e);
    }
  }

  async getBlock(req, res, next) {
    try {
      const blockId = req.params.blockId;

      const block = await blockService.getBlock(blockId);

      res.json(block);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const projectId = req.params.id;
      const blockId = req.params.blockId;

      const deletedBlock = await blockService.delete(projectId, blockId);

      res.json(deletedBlock);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BlockController();