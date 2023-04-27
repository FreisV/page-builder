const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const projectController = require("../controllers/project-controller");

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
router.get("/users", authMiddleware, userController.getUsers);

//projects
router.post("/projects", authMiddleware, projectController.create);
router.put("/projects/:id", authMiddleware, projectController.update);
router.get("/projects/:id", authMiddleware, projectController.get);
router.get("/userProjects", authMiddleware, projectController.getUserProjects);
router.delete("/projects/:id", authMiddleware, projectController.delete);

module.exports = router;
