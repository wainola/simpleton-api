require('dotenv').config();
const { Client } = require('pg');

const { DATABASE_USERNAME, PASSWORD, HOST, DB_PORT, DATABASE, SSLMODE } = process.env;

const client = new Client({
  user: DATABASE_USERNAME,
  password: PASSWORD,
  host: HOST,
  port: DB_PORT,
  database: DATABASE,
  ssl: SSLMODE
});

module.exports = client;
