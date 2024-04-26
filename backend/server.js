const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const Transactions = require("./routes/Transactions");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connectDB function
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err)); // Add error handling for MongoDB connection

// Define routes
app.use("/api/v1", Transactions);
app.use("/api/auth", userRouter); // Corrected path

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
