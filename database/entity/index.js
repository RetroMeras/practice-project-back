const knex = require("../open");

const get = () => {
  return knex.table("entities").where({ login: "1" }).select("*");
};

const post = async (body) => {
  return knex.table("entities").insert(body);
};

const deleteEntity = async (uuid) => {
  const self_res = await knex.table("entities").where({ uuid }).del();
  const other_res = await knex
    .table("relations")
    .where({ from: uuid })
    .orWhere({ to: uuid })
    .del();
};

module.exports = {
  get,
  post,
  deleteEntity,
};
