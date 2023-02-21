const { addUser } = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUser(req.body);
      res
        .status(201)
        .send({ message: "Successful registration, please sign in!" });
    } catch (err) {
      res.status(422).send({ message: err.message });
    }
  },
};

module.exports = userController;
