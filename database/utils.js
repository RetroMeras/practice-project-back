const knex = require("./open");

const deleteResource = async (id) => {
  const creators = await knex
    .table("creators")
    .where({ resource: id })
    .select("*");
  const creators_ids = creators.map((item) => item.id);
  const supplies = await knex
    .table("supplies")
    .whereIn("buyer", creators_ids)
    .orWhereIn("seller", creators_ids)
    .del();
  const participants_ids = creators.map((item) => item.participant);
  const participants = await knex
    .table("participants")
    .whereIn("id", participants_ids)
    .del();
  const resources_ids = creators.map((item) => item.resource);
  const resources = await knex
    .table("resources")
    .whereIn("id", resources_ids)
    .del();
};

module.exports = {
  deleteResource,
};
