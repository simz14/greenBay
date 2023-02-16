const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    pool: {
      min: 0,
      max: 2,
    },
  }
);
module.exports = { db };
