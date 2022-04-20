const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const Speaker = require("./../Models/speakerModel");
const Student = require("./../Models/studentModel");
const Admin = require("./../Models/adminModel");

module.exports.login = (request, response, next) => {
  let token;
  Student.findOne({ email: request.body.email })
    .then(data => {
      if (data == null) {
        Speaker.findOne({ email: request.body.email })
          .then(data => {
            if (data == null) {
              Admin.findOne({ email: request.body.email })
                .then(data => {
                  if (data == null) {
                    next(new Error("you've not been registered yet"));
                  } else {
                    Admin.findOne({ email: request.body.email, password: request.body.password })
                      .then(data => {
                        if (data == null) {
                          throw new Error("userName and password incorrect");
                        }
                        token = jwt.sign({
                          email: data.email,
                          password: data.password,
                          id: data.id,
                          role: "admin"
                        },
                          process.env.JWT_KEY,
                          { expiresIn: "1h" });
                        response.status(200).json({ msg: "login succeeded!", token, role: "admin" });
                      })
                      .catch(error => next(error));
                  }
                })
            } else {
              Speaker.findOne({ email: request.body.email, password: request.body.password })
                .then(data => {
                  if (data == null)
                    throw new Error("userName and password incorrect");
                  token = jwt.sign({
                    email: data.email,
                    password: data.password,
                    id: data.id,
                    role: "speaker"
                  },
                    process.env.JWT_KEY,
                    { expiresIn: "1h" });
                  response.status(200).json({ msg: "login succeeded!", token });
                })
                .catch(error => next(error));
            }
          });
      } else {
        Student.findOne({ email: request.body.email })
          .then(data => {
            if (data == null)
              throw new Error("userName or password incorrect");
            data.comparePassword(request.body.password, function (err, isMatch) {
              if (err) {
                throw new Error(err.message);
              }
              if (isMatch) {
                token = jwt.sign({
                  email: data.email,
                  password: data.password,
                  id: data.id,
                  role: "student"
                },
                  process.env.JWT_KEY,
                  { expiresIn: "1h" });
                response.status(200).json({ msg: "login succeeded!", token });
              } else {
                next("userName or password incorrect");
              }
            });
          })
          .catch(error => next(error));
      }
    });
}

module.exports.signUp = (request, response, next) => {
  let token;
  let result = validationResult(request);
  console.log(request.body)
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
    token = jwt.sign({
      email: request.body.email,
      userName: request.body.userName,
      password: request.body.password,
      role: request.body.role
    }, process.env.JWT_KEY,
      { expiresIn: "1h" });
    newSpeaker.save()
      .then((data) => {
        response.status(201).json({ message: "Speaker Added!", data, token });
      })
      .catch(error => next(error));
  } else if (request.body.role == 'student') {
    let newStd = new Student({
      email: request.body.email,
      password: request.body.password
    });
    token = jwt.sign({
      email: request.body.email,
      password: request.body.password,
      role: request.body.role
    }, process.env.JWT_KEY,
      { expiresIn: "1h" });
    newStd.save()
      .then((data) => {
        response.status(201).json({ message: "Student Added!", data, token });
      })
      .catch(error => next(error));
  } else {
    let error = new Error("Account role isn't defined or role is unrecognizable");
    error.status = 422;
    throw error;
  }
}