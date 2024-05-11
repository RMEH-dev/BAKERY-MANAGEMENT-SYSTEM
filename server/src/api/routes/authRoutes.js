const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//routes to the AuthController instance
router.post("/checkExistingUser", authController.checkExistingUser);
router.post("/signUp", authController.signUp);
router.post("/login", authController.login);
// router.post("/logout", authController.logout);

module.exports = router;
