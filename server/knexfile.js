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
      database: "db4joun5q12mqc",
      user: "ihkpdgdaembbvd",
      password: "33390c0664c9c3b5d4946bf94d76e66814cde8b9d9a7a2ebf0b693c21e9760a8",
      host: "ec2-54-210-226-209.compute-1.amazonaws.com",
      ssl: {rejectUnauthorized: false},
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {directory: './data/seeds'}
  },


};
