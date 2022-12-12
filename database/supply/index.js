const knex = require("../open");

const get = () => {
  return knex.table("supplies").select("*");
};

const post = async (body) => {
  return knex.table("supplies").insert({
    id: body.id,
    buyer: body.supplier, // id
    product: body.resource, // id
  });
};

const update = async (id, body) => {
  return knex.table("supplies").where({ id }).update({
    id: body.id,
    buyer: body.supplier, // id
    product: body.resource, // id
  });
};

const deleteSupply = async (id) => {
  return knex.table("supplies").where({ id }).del();
};

module.exports = {
  get,
  post,
  update,
  deleteSupply,
};
