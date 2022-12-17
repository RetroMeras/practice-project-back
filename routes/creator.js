const express = require("express");
const router = express.Router();
const id = require("uuid");
const { get, deleteCreator } = require("../database/creator");

router.get("/", async (req, res) => {
  const data = await get();
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteCreator(id);
  res.status(200).send();
});

module.exports = router;
