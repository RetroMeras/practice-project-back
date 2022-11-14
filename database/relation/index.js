const knex = require("../open");

const get = () => {
  return knex.table("relations").where({ login: "1" }).select("*");
};

const post = async (body) => {
  return knex.table("relations").insert(body);
};

const deleteRelation = async (uuid) => {
  return knex.table("relations").where({ uuid }).del();
};

module.exports = {
  get,
  post,
  deleteRelation,
};
