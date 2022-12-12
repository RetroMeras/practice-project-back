const knex = require("../open");

const get = () => {
  return knex.table("products").select("*");
};

const post = async (body) => {
  return knex.table("products").insert({
    id: body.id,
    supplier: body.supplier, // id
    resource: body.resource, // id
  });
};

const update = async (id, body) => {
  return knex.table("products").where({ id }).update({
    id: body.id,
    supplier: body.supplier, // id
    resource: body.resource, // id
  });
};

const deleteSupply = async (id) => {
  return knex.table("products").where({ id }).del();
};

module.exports = {
  get,
  post,
  update,
  deleteSupply,
};
