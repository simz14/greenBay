const express = require("express");
const { db } = require("./data/connection");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 5000;

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
