const stylesService = require("../services/styles-service");

class StylesController {
  async get(req, res, next) {
    try {
      const projectId = req.params.id;

      const styles = await stylesService.get(projectId);

      res.json(styles);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const data = req.body;

      const styles = await stylesService.update(data);

      res.json(styles);
    } catch (e) {
      next(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const blockId = req.params.blockId;

      const styles = await stylesService.getOne(blockId);

      res.json(styles);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new StylesController();
