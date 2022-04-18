const express = require("express");
const { body, param, query } = require("express-validator");

const authMW = require("../MiddleWares/authMiddleWare");
const router = express.Router();
const controller = require('../Controllers/studentController');

router.use(authMW);

router.route('/student')
  .post(
    [
      body("id").isNumeric().withMessage("Id should be number"),
      body("email").isEmail().withMessage('Invalid email'),
      body("password").isString().withMessage('Weak password'),
      body("us-role").equals('student').withMessage('Invalid system role')
    ],
    controller.addStudent)
  .delete(controller.deleteStudent);

module.exports = router;