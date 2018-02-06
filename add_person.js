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


knex('famous_people').insert(process.argv[2], process.argv[3], process.argv[4])

.finally(function() {
  knex.destroy();
});
