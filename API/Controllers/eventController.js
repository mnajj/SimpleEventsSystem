const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const Event = require("./../Models/eventModel");


module.exports.getEventsData = (request, response, next) => {
  if (request.body.role == 'speaker') {
    Event.find({ mainSpeaker: request.body.id, otherSpeakers: request.body.id })
      .populate('mainSpeaker')
      .populate('otherSpeakers')
      .populate('students')
      .then(data => response.status(200).json({ data }))
      .catch(error => next(error));
  } else if (request.body.role == 'student') {
    Event.find({ students: request.body.id })
      .populate('mainSpeaker')
      .populate('otherSpeakers')
      .populate('students')
      .then(data => response.status(200).json({ data }))
      .catch(error => next(error));
  } else if (request.body.role == 'admin') {
    Event.find()
    .populate('mainSpeaker')
    .populate('otherSpeakers')
    .populate('students')
    .then(data => response.status(200).json({ data }))
    .catch(error => next(error));
  } else {
    next(new Error('undefined role'));
  }
}

module.exports.addEvent = (request, response, next) => {
  let result = validationResult(request);
  if (!result.isEmpty()) {
    let message = result.array().reduce((current, error) => current + error.msg + " ", " ");
    let error = new Error(message);
    error.status = 422;
    throw error;
  }
  let newEvent = new Event({
    title: request.body.title,
    date: request.body.date,
    mainSpeaker: request.body.mainSpeaker,
    otherSpeakers: request.body.otherSpeakers,
    students: request.body.students,
  });
  newEvent.save()
    .then((data) => {
      response.status(201).json({ message: "Event Added!", newEvent });
    })
    .catch(error => next(error));
}

module.exports.deleteEvent = (request, response, next) => {
  Event.remove({title: request.body.title}, (error) => {
    if (!error) {
      response.status(200).json({ message: "Event Deleted Successfully!" });
    } else {
      next(new Error("Can't delete Event from system"));
    }
  });
}