const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const Speaker = require("./../Models/speakerModel");

module.exports.deleteSpeaker = (request, response, next) => {
  Speaker.remove({ email: request.body.email },
    (error) => {
      if (!error) {
        response.status(200).json({ message: "Speaker Deleted Successfully!" });
      } else {
        next(new Error("Can't delete speaker from system"));
      }
    });
}

module.exports.getSpeakers = (request, response, next) => {
  console.log('here');
  Speaker.find({})
    .then(data => {
      response.status(200).json(data);
    })
    .catch(error => next(error));
}

module.exports.addSpeaker = (request, response, next) => {
  let result = validationResult(request);
  if (!result.isEmpty()) {
    let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
    console.log(message)
    let error = new Error(message);
    error.status = 422;
    throw error;
  }
  let newSpeaker = new Speaker({
    email: request.body.email,
    userName: request.body.userName,
    password: request.body.password,
    address: request.body.address
  });
  newSpeaker.save()
    .then((data) => {
      response.status(201).json({ message: "Speaker Added!", data, token });
    })
    .catch(error => next(error));
}

module.exports.updateSpeaker = (request, response, next) => {
  if (request.body.role == 'speaker') {
    Speaker.findOne({ email: request.body.oldEmail })
      .then(data => {
        if (data == null)
          throw new Error("userName or password incorrect");
        if (request.body.email != undefined) {
          data.email = request.body.email;
        }
        if (request.body.password != undefined) {
          data.password = request.body.password;
        }
        data.save();
        response.status(201).json({ message: "Speaker info updated!", data });
      })
      .catch(error => next(error));
  } else if (request.body.role == 'admin') {

  }
}