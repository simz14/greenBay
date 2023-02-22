const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const addUserService = async (data) => {
  const { username, email, password } = data;
  const usernameExists = await User.findOne({
    where: { username: username },
  });
  if (!usernameExists) {
    const emailExists = await User.findOne({ where: { email: email } });
    if (!emailExists) {
      try {
        await User.create({
          username: username,
          email: email,
          password: password,
        });
      } catch (err) {
        err.errors.map((e) => {
          throw new Error(e.message);
        });
      }
    } else {
      throw new Error("Email already exists!");
    }
  } else {
    throw new Error("Username already exists!");
  }
};

const checkUserService = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({
    where: { email: email },
  });

  if (user) {
    const valid = bcrypt.compare(password, user.password);
    if (!(await valid)) {
      throw new Error("Incorrect password!");
    }
    return "Successful";
  } else {
    throw new Error("Incorrect email adress!");
  }
};

module.exports = { addUserService, checkUserService };
