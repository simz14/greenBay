const {
  addUserService,
  checkUserService,
} = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUserService(req.body);
      res
        .status(201)
        .send({ message: "Successful registration, please sign in!" });
    } catch (err) {
      res.status(422).send({ message: err.message });
    }
  },

  async checkUser(req, res) {
    try {
      await checkUserService(req.body);
      res.status(200);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
};

module.exports = userController;
