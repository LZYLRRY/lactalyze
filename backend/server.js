import express from "express";
import dotenv from "dotenv";
import router from "./routes/lactation.js";

// Load environment variables from .env file
dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.path);
  next();
});

// routes
app.use("/api/lactation", router);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("server started on port", process.env.PORT);
});
