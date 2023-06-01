class ImageService {
  async getImage(filename) {
    const imagePath = `${process.env.IMAGES_FOLDER}/${filename}`;

    return imagePath;
  }
}

module.exports = new ImageService();
