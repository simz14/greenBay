const jwt = require("jsonwebtoken");

const createJwt = (id, username, isAdmin, email) => {
  let payload = {
    userId: id,
    username: username,
    email: email,
    isAdmin: isAdmin,
  };
  return jwt.sign(payload, process.env.SECRET_KEY);
};

module.exports = { createJwt };
