const express = require("express");
const router = express.Router();
const uuid = require("uuid");

router.get("/", (req, res) => {
  console.log(1);
  res.send("Entities");
});

router.post("/", (req, res) => {
  const body = req.body;
  body.uuid = uuid.v4();
  console.log(body);
  res.json(body);
});

module.exports = router;
