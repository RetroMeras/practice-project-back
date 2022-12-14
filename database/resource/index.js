const knex = require("../open");
const deleteResourceById = require("../utils").deleteResource;

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
  return deleteResourceById(id);
};

module.exports = {
  get,
  post,
  update,
  deleteResource,
};
