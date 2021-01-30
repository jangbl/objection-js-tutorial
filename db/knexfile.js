// Update with your config settings.

const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'objection_tutorial',
      user: 'jgoebel',
      password: null,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    // automatically convert camelCase to snake case
    // so table names are in snake case
    // but we can use camelCase fields per default
    ...knexSnakeCaseMappers(),
  },
};
