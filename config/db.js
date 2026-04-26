const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
    tls: true,
  });
};

module.exports = connectDB;
