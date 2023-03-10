const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.addUser);
router.post("/login", userController.checkUser);
router.patch("/editprofile", userController.updateUser);

module.exports = router;
