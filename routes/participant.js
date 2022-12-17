const express = require("express");
const router = express.Router();
const id = require("uuid");
const {
  get,
  post,
  update,
  deleteParticipant,
} = require("../database/participant");
const { post: post_creator } = require("../database/creator");

router.get("/", async (req, res) => {
  const data = await get();
  res.json(data);
});

router.post("/", async (req, res) => {
  const body = req.body;
  body.id = id.v4();
  const result_participant = await post(body);
  const result_creator = await post_creator({
    id: id.v4(),
    participant: body.id,
    resource: body.resource,
  });
  res.json(body);
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const result = await update(id, body);
  res.json(body);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteParticipant(id);
  res.status(200).send();
});

module.exports = router;
