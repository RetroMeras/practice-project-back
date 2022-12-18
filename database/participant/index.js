const knex = require("../open");

const get = () => {
  return knex.table("participants").select("*");
};

const post = async (body) => {
  return knex.table("participants").insert({
    id: body.id,
    name: body.name,
  });
};

const update = async (id, body) => {
  return knex.table("participants").where({ id }).update({
    name: body.name,
  });
};

const deleteParticipant = async (id) => {
  knex.table("creators").where({ participant: id }).del();
  return knex.table("participants").where({ id }).del();
};

module.exports = {
  get,
  post,
  update,
  deleteParticipant,
};
