const express = require("express");

const {
  registerControllers,
  loginControllers,
  setAvatarController,
  allUsers,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerControllers);
router.route("/login").post(loginControllers);
router.route("/setAvatar/:id").post(setAvatarController);
router.route("/users/:id").get(allUsers);

module.exports = router;
