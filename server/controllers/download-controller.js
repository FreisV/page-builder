const downloadService = require("../services/download-service");

class DownloadController {
  async download(req, res, next) {
    try {
      const { user } = req;
      const projectId = req.params.id;

      const filePath = await downloadService.download(user.id, projectId);

      res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");

      res.download(filePath, (err) => {
        if (err) {
          console.error(`Ошибка загрузки файла: ${err}`);
        } else {
          downloadService.deleteDownloadedFile(filePath);
          console.log("Файл успешно загружен");
        }
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DownloadController();
