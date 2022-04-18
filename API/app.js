const express = require('express');
const app = express();
const body_parser = require('body-parser');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');


const authRouter = require('./Routers/authRouter');
const eventRouter = require('./Routers/eventRouter');
const studentRouter = require('./Routers/studentRouter')
const speakerRouter = require('./Routers/speakerRouter');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log('DB Connected Successfully!');
    app.listen(process.env.PORT || 8080, () => {
      console.log('Listening....');
    });
  })
  .catch(error => console.log("Can't Connect to DB!"));

// CORS
app.use(cors({ origin: '*' }));
// body parsing middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

// Logger MW
app.use((request, response, next) => {
  console.log(request.url, request.method);
  next();
});

// Routers
app.use(authRouter);
app.use(eventRouter);
app.use(studentRouter);
app.use(speakerRouter);

// Not Found MW
app.use((request, response) => {
  response.status(404).json(({ message: "Page not Found!" }));
});

// ErrorHandler MW
app.use((error, request, response, next) => {
  response.status(500).json(({ message: `${error}` }));
});