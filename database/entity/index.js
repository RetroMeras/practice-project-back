const knex = require("../open");

const get = () => {
  return knex.table("entities").where({ login: "1" }).select("*");
};

const post = async (body) => {
  return knex.table("entities").insert(body);
};

module.exports = {
  get,
  post,
};
