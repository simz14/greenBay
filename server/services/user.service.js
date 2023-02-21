const { User } = require("../models/user");

const addUser = async (data) => {
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
      throw new Error("Email already exists");
    }
  } else {
    throw new Error("Username already exists");
  }
};

module.exports = { addUser };
