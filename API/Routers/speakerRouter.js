const express = require("express");
const { body, param, query } = require("express-validator");

const authMW = require("../MiddleWares/authMiddleWare");
const router = express.Router();
const controller = require('../Controllers/speakerController');

router.use(authMW);

router.route('/speaker')
  .get(controller.getSpeakers)
  .post(
    [
      body("id").isNumeric().withMessage("Id should be number"),
      body("email").isEmail().withMessage('Invalid email'),
      body("userName").isString().withMessage('userName should be string'),
      body("password").isString().withMessage('Weak password'),
      body("address").isString().withMessage('Invalid address'),
      body("us-role").equals('speaker').withMessage('Invalid system role')
    ],
    controller.addSpeaker)
  .put(controller.updateSpeaker)
  .delete(controller.deleteSpeaker);

module.exports = router;