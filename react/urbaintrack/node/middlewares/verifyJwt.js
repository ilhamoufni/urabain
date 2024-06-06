const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }


    req.user = decoded.user.email;

    next();
  });
};

module.exports = verifyJwt;
