const ProjectModel = require("../models/project-model");
const BlockModel = require("../models/blocks/block-model");
const StylesModel = require("../models/styles/styles-model");
const fs = require("fs");
const fsp = require("fs/promises");
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

    const imagesFolderPath = `${directoryPath}images\\`;
    fs.mkdirSync(imagesFolderPath, { recursive: true });

    const htmlFile = `${directoryPath}index.html`;
    const cssFile = `${directoryPath}style.css`;

    fs.writeFileSync(htmlFile, "");
    fs.writeFileSync(cssFile, "");

    const allImagesFolderPath = process.env.IMAGES_FOLDER;

    for (const block of blocks) {
      if (block.filename) {
        const sourceFilePath = `${allImagesFolderPath}${block.filename}`;
        const destinationFilePath = `${imagesFolderPath}${block.filename}`;

        fs.copyFileSync(sourceFilePath, destinationFilePath);
      }

      if (block.filename2) {
        const sourceFilePath = `${allImagesFolderPath}${block.filename2}`;
        const destinationFilePath = `${imagesFolderPath}${block.filename2}`;

        fs.copyFileSync(sourceFilePath, destinationFilePath);
      }

      if (block.filename3) {
        const sourceFilePath = `${allImagesFolderPath}${block.filename3}`;
        const destinationFilePath = `${imagesFolderPath}${block.filename3}`;

        fs.copyFileSync(sourceFilePath, destinationFilePath);
      }
    }

    for (const style of styles) {
      if (style.backgroundImage) {
        const sourceFilePath = `${allImagesFolderPath}${style.backgroundImage}`;
        const destinationFilePath = `${imagesFolderPath}${style.backgroundImage}`;

        fs.copyFileSync(sourceFilePath, destinationFilePath);
      }
    }

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

    for (const file of await fsp.readdir(imagesFolderPath)) {
      await fsp.unlink(path.join(imagesFolderPath, file));
    }

    fs.rmdirSync(imagesFolderPath);

    for (const file of await fsp.readdir(directoryPath)) {
      await fsp.unlink(path.join(directoryPath, file));
    }

    return zipFile;
  }

  async createZip(directoryPath, filename) {
    const zipFile = `${directoryPath}..\\${filename}.zip`;
    const output = fs.createWriteStream(zipFile);
    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(directoryPath, false);

    await new Promise((resolve, reject) => {
      output.on("close", () => {
        resolve();
      });

      archive.on("error", (err) => {
        reject(err);
      });

      archive.finalize();
    });

    return zipFile;
  }

  async deleteDownloadedFile(filePath) {
    await fsp.unlink(filePath);
  }
}

module.exports = new DownloadService();
