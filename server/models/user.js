const { db } = require("../data/connection");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: { msg: "Email is not valid" } },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Password atleast 8 characters long",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = { User };
