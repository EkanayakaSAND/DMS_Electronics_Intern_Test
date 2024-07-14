const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connection established...");
    })
    .catch((error) => {
      console.log(`Error connecting to Database: ${error.message}`);
    });
};

module.exports = dbConnection;
