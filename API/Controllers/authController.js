const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const Speaker = require("./../Models/speakerModel");
const Student = require("./../Models/studentModel");

module.exports.login = (request, response, next) => {
  let token;
  console.log(request.body);
  if (request.body.email == 'm@m.m' && request.body.password == '123') {
    token = jwt.sign({
      email: request.body.email,
      role: "admin"
    }, process.env.JWT_KEY,
      { expiresIn: "1h" });
    response.status(200).json({ message: "login", token });
  } else {
    next(new Error("User name and password incorrect"));
  }
}

module.exports.signUp = (request, response, next) => {
  let result = validationResult(request);
  if (!result.isEmpty()) {
    let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
    let error = new Error(message);
    error.status = 422;
    throw error;
  }
  if (request.body.role == 'speaker') {
    let newSpeaker = new Speaker({
      email: request.body.email,
      userName: request.body.userName,
      password: request.body.password,
      address: request.body.address
    });
    newSpeaker.save()
    .then((data) => {
      response.status(201).json({ message: "Speaker Added!", data });
    })
    .catch(error => next(error));
  } else if (request.body.role == 'student') {
    let newStd = new Student({
      email: request.body.email,
      password: request.body.password
    });
    newStd.save()
    .then((data) => {
      response.status(201).json({ message: "Student Added!", data});
    })
    .catch(error => next(error));
  } else {
    let error = new Error('Must define the account role!');
    error.status = 422;
    throw error;
  }
}