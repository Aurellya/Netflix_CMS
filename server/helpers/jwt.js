const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const sign = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

const verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { sign, verify };
