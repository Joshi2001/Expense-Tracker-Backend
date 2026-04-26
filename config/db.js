const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // fail fast with clear error
  });
};
module.exports = connectDB;
