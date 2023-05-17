const jwt = require("jsonwebtoken");

/* This is a middleware function that is used to authenticate and authorize requests made to a server.
It checks for a valid JWT token in the authorization header of the request, verifies the token using
the secret key stored in the environment variable, and extracts the user ID from the decoded token.*/
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.AUTH_TOKEN);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user Id";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error("Invalid Request!") });
  }
};