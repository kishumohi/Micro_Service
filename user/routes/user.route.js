const express = require("express");
const {
  registercontroller,
  login,
  logout,
  profile,
} = require("../controllers/user.controller.js");
const { userAuth } = require("../middleware/authmiddleware.js");
const router = express.Router();

router.post("/register", registercontroller);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", userAuth, profile);

module.exports = router;
