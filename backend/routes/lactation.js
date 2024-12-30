import express from "express";

const router = express.Router();

//GET all data
router.get("/", (req, res) => {
  res.json({
    mssg: "GET all data",
  });
});

//GET a specific data
router.get("/:id", (req, res) => {
  res.json({
    mssg: "GET a specific data",
  });
});

//POST a data
router.post("/", (req, res) => {
  res.json({
    mssg: "POST a data",
  });
});

//DELETE a data
router.delete("/:id", (req, res) => {
  res.json({
    mssg: "DELETE a data",
  });
});

//PATCH a data
router.patch("/:id", (req, res) => {
  res.json({
    mssg: "PATCH a data",
  });
});

export default router;
