// npx knex migrate:make init --migrations-directory db/migrations
const knex = require('knex');
const knexfile = require('./knexfile');
const { Model } = require('objection');

function setupDb() {
  const db = knex(knexfile.development);

  // plug db config into objection
  Model.knex(db);
}

module.exports = setupDb;
