const express = require('express');
const server = express();

server.listen(process.env.PORT || 8080, () => {
  console.log('Listening....');
});