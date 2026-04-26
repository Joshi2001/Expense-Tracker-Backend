require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Debug (remove later)
console.log("ENV CHECK:", {
  mongo: process.env.MONGO_URI ? "OK" : "MISSING",
  jwt: process.env.JWT_SECRET ? "OK" : "MISSING",
});

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
