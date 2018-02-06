const pg = require('pg');
const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

knex.select().table('famous_people').asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log(rows);
});