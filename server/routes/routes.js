const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.addUser);
router.post("/login", userController.checkUser);

module.exports = router;
