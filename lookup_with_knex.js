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


knex('famous_people')
.whereRaw('first_name = ?', process.argv[2])
.orWhereRaw('last_name = ?', process.argv[2])

.asCallback(function(err, rows) {
  if (err) return console.error(err);
console.log(`Searching...
Found match under name: ${process.argv[2]}
${rows[0].id}: ${rows[0].first_name} ${rows[0].last_name}, born ${rows[0].birthdate}`);
})


.finally(function() {
  knex.destroy();
});
