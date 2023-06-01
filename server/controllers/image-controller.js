const imageService = require("../services/image-service");

class ImageController {
  async getImage(req, res, next) {
    try {
      const { filename } = req.params;

      const image = await imageService.getImage(filename);

      res.sendFile(image);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ImageController();
