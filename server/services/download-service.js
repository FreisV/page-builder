const ProjectModel = require("../models/project-model");
const BlockModel = require("../models/blocks/block-model");
const StylesModel = require("../models/styles/styles-model");
const fs = require("fs");
const htmlService = require("../services/html-service");
const cssService = require("../services/css-service");
const archiver = require("archiver");
const path = require("path");

class DownloadService {
  async download(userId, projectId) {
    const project = await ProjectModel.findById(projectId);

    const blocks = await BlockModel.find({ projectId }).sort({
      blockNumber: "asc",
    });
    const styles = await StylesModel.find({ projectId });

    const directoryPath = `${process.env.FILE_FOLDER}${projectId}\\${userId}\\`;
    fs.mkdirSync(directoryPath, { recursive: true });

    const htmlFile = `${directoryPath}index.html`;
    const cssFile = `${directoryPath}style.css`;

    fs.writeFileSync(htmlFile, "");
    fs.writeFileSync(cssFile, "");

    htmlService.createHtmlStart(htmlFile, project.name);

    for (const block of blocks) {
      htmlService.writeBlockToHtml(htmlFile, block);
    }

    htmlService.createHtmlEnd(htmlFile);

    cssService.createCssStart(cssFile);

    for (const style of styles) {
      cssService.writeStylesToCss(cssFile, style);
    }

    const zipFile = await this.createZip(directoryPath, project.name);

    return zipFile;
  }

  async createZip(directoryPath, filename) {
    const zipFile = `${directoryPath}${filename}.zip`;
    const output = fs.createWriteStream(zipFile);
    const archive = archiver("zip", { zlib: { level: 9 } });
  
    archive.pipe(output);
  
    fs.readdirSync(directoryPath).forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stat = fs.statSync(filePath);
  
      if (stat.isFile() && file !== path.basename(zipFile)) {
        archive.file(filePath, { name: file });
      }
    });
  
    await new Promise((resolve, reject) => {
      output.on('close', () => {
        resolve();
      });
  
      archive.on('error', (err) => {
        reject(err);
      });
  
      archive.finalize();
    });
  
    return zipFile;
  }
}

module.exports = new DownloadService();
