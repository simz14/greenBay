const { db } = require("../data/connection");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

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
        isEmail: { msg: "Invalid Email adress!" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLength() {
          if (this.password.length < 8) {
            throw new Error("Password needs 8 characters!");
          }
        },
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

User.beforeBulkUpdate(async (user, options) => {
  if (user.attributes.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.attributes.password, salt);
    user.attributes.password = hashedPassword;
  }
});

module.exports = { User };
