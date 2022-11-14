const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "databaseFile.db",
  },
  useNullAsDefault: false,
});

module.exports = knex;
