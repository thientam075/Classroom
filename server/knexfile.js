// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {directory: './data/seeds'}
  },

  testing: {
    client: 'pg',
    connection: {
      database: process.env.DB_DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {directory: './data/seeds'}
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {directory: './data/seeds'}
  },


};
