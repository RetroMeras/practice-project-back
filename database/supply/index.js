const knex = require("../open");

const generateSupply = (body) => ({
  id: body.id,
  seller: body.seller,
  buyer: body.buyer,
  price_value: body.price.value,
  price_unit: body.price.unit,
  size_value: body.size.value,
  size_unit: body.size.unit,
});

const get = () => {
  return knex.table("supplies").select("*");
};

const post = async (body) => {
  return knex.table("supplies").insert(generateSupply(body));
};

const update = async (id, body) => {
  return knex.table("supplies").where({ id }).update(generateSupply(body));
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
