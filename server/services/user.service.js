const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const { createJwt } = require("../middlewares/tokenCreation");

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
    const usersJwt = createJwt(
      user.id,
      user.username,
      user.isAdmin,
      user.email
    );
    return usersJwt;
  } else {
    throw new Error("Incorrect email adress!");
  }
};

const updateUserService = async (data) => {
  if (data.currentPassword) {
    const user = await User.findOne({
      where: { id: data.id },
    });

    if (user) {
      const valid = bcrypt.compare(data.currentPassword, user.password);
      if (!valid) {
        throw new Error("Incorrect password!");
      } else {
        const entries = Object.entries(data);
        const toChange = entries.filter(
          (array) =>
            array[1].length > 0 &&
            array[0] !== "currentPassword" &&
            array[0] !== "id"
        );

        const obj = {};
        for (let i = 0; i < toChange.length; i++) {
          obj[toChange[i][0]] = toChange[i][1];
        }
        try {
          await User.update(obj, {
            where: { id: data.id },
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
};

module.exports = { addUserService, checkUserService, updateUserService };
