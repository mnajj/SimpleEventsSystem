const express = require('express');
const body_parser = require('body-parser');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const authRouter = require('./Routers/authRouter');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => {
  console.log('DB Connected Successfully!');
  server.listen(process.env.PORT || 8080, () => {
    console.log('Listening....');
  });
})
.catch(error => console.log("Can't Connect to DB!"));
const server = express();



// Logger MW
server.use((request, response, next) => {
  console.log(request.url, request.method);
  next();
});

// body parsing middleware
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: false }));

// Routers
server.use(authRouter);

// Not Found MW
server.use((request, response) => {
  response.status(404).json(({ message: "Page not Found!" }));
});

// Error MW
server.use((error, request, response, next) => {
  response.status(500).json(({ message: `${error}` }));
});