const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const Student = require("./../Models/studentModel");

module.exports.deleteStudent = (request, response, next) => {
  Student.remove({ email: request.body.email },
    (error) => {
      if (!error) {
        response.status(200).json({ message: "Student Deleted Successfully!" });
      } else {
        next(new Error("Can't delete student from system"));
      }
    });
}
module.exports.getStudents = (request, response, next) => {
  Student.find({})
    .then(data => response.status(201).json(data))
    .catch(error => next(error));
}

module.exports.addStudent = (request, response, next) => {
  let result = validationResult(request);
  if (!result.isEmpty()) {
    let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
    let error = new Error(message);
    error.status = 422;
    throw error;
  }
  let newStd = new Student({
    email: request.body.email,
    password: request.body.password,
  });
  newStd.save()
    .then((data) => {
      response.status(201).json({ message: "Student Added!", data });
    })
    .catch(error => next(error));
}

module.exports.updateStudent = (request, response, next) => {
  if (request.body.role == 'student') {
    Student.findOne({ email: request.body.oldEmail })
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
        response.status(201).json(data);
      })
      .catch(error => next(error));
  } else if (request.body.role == 'admin') {

  }
}