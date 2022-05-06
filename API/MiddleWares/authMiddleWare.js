const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  let token, decodedToken;
  try {
    token = request.get('Authorization').split(' ')[1];
    decodedToken = jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    next(new Error("Not Authenticated"));
  }
  if (Object.keys(request.body).length === 0) {
    // next(new Error("Content cannot be empty"));
    next();
  } else {
    request.body.role = decodedToken.role;
    request.body.id = decodedToken.id;
    next();
  }
}