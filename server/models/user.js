const { db } = require("../data/connection");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLength() {
          if (this.username.length < 1) {
            throw new Error("Username is missing!");
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLength() {
          if (this.email.length < 1) {
            throw new Error("Email is missing!");
          }
        },
        isEmail: { msg: "Email is not valid!" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLength() {
          if (this.password.length < 8) {
            throw new Error("Password must be atleast 8 character long!");
          }
        },
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = { User };
