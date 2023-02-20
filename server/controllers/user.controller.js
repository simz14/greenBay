const { addUser } = require("../services/user.service");

const userController = {
  async addUser(req, res) {
    try {
      await addUser(req.body);
      res.status(201).send("Successful registration");
    } catch (err) {
      res.send(err.message);
    }
  },
};

module.exports = userController;
