const jwt = require("jsonwebtoken");

const createJwt = (id, username, isAdmin) => {
  let payload = {
    userId: id,
    username: username,
    isAdmin: isAdmin,
  };
  return jwt.sign(payload, process.env.SECRET_KEY);
};

module.exports = { createJwt };
