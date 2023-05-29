const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const checkProjectOwnerMiddleware = require("../middlewares/check-project-owner-middleware");
const projectController = require("../controllers/project-controller");
const blockController = require("../controllers/block-controller");
const stylesController = require("../controllers/styles-controller");
const downloadController = require("../controllers/download-controller");
const upload = require("../middlewares/upload-middleware")

//authorization
router.post(
  "/registration",
  body("username").isLength({ min: 3, max: 32 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

//projects
router.post(
  "/projects",
  authMiddleware,
  body("name").isLength({ min: 1, max: 30 }),
  projectController.create
);
router.put(
  "/projects/:id",
  authMiddleware,
  body("name").isLength({ min: 1, max: 30 }),
  projectController.update
);
router.get("/projects/:id", authMiddleware, projectController.get);
router.get("/userProjects", authMiddleware, projectController.getUserProjects);
router.delete("/projects/:id", authMiddleware, projectController.delete);

//blocks
router.post(
  "/projects/:id/blocks",
  authMiddleware,
  checkProjectOwnerMiddleware,
  blockController.create
);
router.put(
  "/projects/:id/blocks",
  authMiddleware,
  checkProjectOwnerMiddleware,
  upload.array("photos", 3),
  blockController.update
);
router.get("/projects/:id/blocks", authMiddleware, blockController.getBlocks);
router.get(
  "/projects/:id/blocks/:blockId",
  authMiddleware,
  blockController.getBlock
);
router.delete(
  "/projects/:id/blocks/:blockId",
  authMiddleware,
  checkProjectOwnerMiddleware,
  blockController.delete
);

//styles
router.get("/projects/:id/styles", authMiddleware, stylesController.get);
router.put(
  "/projects/:id/styles",
  authMiddleware,
  checkProjectOwnerMiddleware,
  upload.single("photo"),
  stylesController.update
);
router.get(
  "/projects/:id/styles/:blockId",
  authMiddleware,
  stylesController.getOne
);

//download
router.get(
  "/projects/:id/download",
  authMiddleware,
  downloadController.download
);

module.exports = router;
