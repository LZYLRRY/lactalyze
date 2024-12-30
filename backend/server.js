import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.path)
  next()
}

// routes
app.get("/", (req, res) => {
  res.json({
    mssg: "Welcome to the app",
  });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("server started on port", process.env.PORT);
});

