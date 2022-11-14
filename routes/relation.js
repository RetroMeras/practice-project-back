const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const { get, post, deleteRelation } = require("../database/relation");

router.get("/", async (req, res) => {
  const data = await get();
  res.json(data);
});

router.post("/", async (req, res) => {
  const body = req.body;
  body.uuid = uuid.v4();
  const result = await post(body);
  res.json(body);
});

router.delete("/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const result = await deleteRelation(uuid);
  res.status(200).send();
});

module.exports = router;
