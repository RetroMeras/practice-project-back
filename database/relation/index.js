const knex = require("../open");

const get = () => {
  return knex.table("relations").where({ login: "1" }).select("*");
};

const post = async (body) => {
  return knex.table("relations").insert(body);
};

module.exports = {
  get,
  post,
};
