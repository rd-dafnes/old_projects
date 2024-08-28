const mongoose = require("mongoose"); // import mongoose

// connection to mongoDB
const connectDB = async uri => {
  try {
    await mongoose.connect(uri);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("MongoDB connnection error: ", error);
  }
};

module.exports = connectDB;
