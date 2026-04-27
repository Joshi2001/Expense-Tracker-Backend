require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes"); // path check kar lena

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // 👈 yaha tera signup/login connect hoga

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
