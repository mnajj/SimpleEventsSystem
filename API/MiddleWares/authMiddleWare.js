const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  let token, decodedToken;
  try {
    token = request.get("Authorization").split(' ')[1];
    decodedToken = jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    next(new Error("Not Authenticated"));
  }
  request.body.role = decodedToken.role;
  request.body.id = decodedToken.id;
  next();
}