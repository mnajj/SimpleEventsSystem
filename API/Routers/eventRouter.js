const express = require("express");
const { body, param, query } = require("express-validator");

const authMW = require("../MiddleWares/authMiddleWare");
const router = express.Router();
const controller = require('../Controllers/eventController');

router.use(authMW);

router.route('/event')
  .get(controller.getEventsData)
  .post(
    [
    body("title").isString().withMessage("Title should be string"),
    body("date").isDate().withMessage('Date should be date type'),
    body("mainSpeaker").isInt().withMessage('Main speaker id should be date int'),
    body("otherSpeakers").isArray().withMessage('Other speaker ids should be array of int'),
    body("students").isArray().withMessage('students ids should be array of int')
  ],
    controller.addEvent);

module.exports = router;