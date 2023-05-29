const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.user.id;
    const projectId = req.params.id;
    const blockId = req.body.blockId || req.body.id;

    const destinationPath = `${process.env.IMAGES_FOLDER}/${userId}/${projectId}/${blockId}`;

    fs.mkdir(destinationPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }

      cb(null, destinationPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
