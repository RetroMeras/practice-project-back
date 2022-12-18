const knex = require("../open");

const get = () => {
  return knex.table("resources").select("*");
};

const post = async (body) => {
  return knex.table("resources").insert({
    id: body.id,
    name: body.name,
  });
};

const update = async (id, body) => {
  return knex.table("resources").where({ id }).update({
    name: body.name,
  });
};

const deleteResource = async (id) => {
  knex.table("creators").where({ resource: id }).del();
  return knex.table("resources").where({ id }).del();
};

module.exports = {
  get,
  post,
  update,
  deleteResource,
};
