const knex = require("../open");

const get = () => {
  return knex.table("units").select("*");
};

const post = async (body) => {
  return knex.table("units").insert({
    id: body.id,
    name: body.name,
    currency: body.currency,
  });
};

const update = async (id, body) => {
  return knex.table("units").where({ id }).update({
    name: body.name,
    currency: body.currency,
  });
};

const deleteUnit = async (id) => {
  return knex.table("units").where({ id }).del();
};

module.exports = {
  get,
  post,
  update,
  deleteUnit,
};
