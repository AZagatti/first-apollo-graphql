// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    database: "desafio-cap-04",
    user: "postgres",
    password: "docker",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
