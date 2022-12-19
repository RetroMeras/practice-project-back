const knex = require("../open");

const get = () => {
  return knex.table("creators").select("*");
};

const post = async (body) => {
  return knex.table("creators").insert({
    id: body.id,
    participant: body.participant,
    resource: body.resource,
  });
};

const deleteCreator = async (id) => {
  return knex.table("creators").where({ id }).del();
};

module.exports = {
  get,
  post,
  deleteCreator,
};
