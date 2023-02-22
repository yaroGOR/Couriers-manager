const pg = require("pg");
const Pool = pg.Pool;
const connURL = process.env.PG_URI;
function connect() {
  if (!process.env.PORT) {
    console.log("Running DB on localhost");
    return new Pool({
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DB,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
    });
  } else {
    console.log("Сonnecting DB on server");
    return new Pool({ connectionString: connURL });
  }
}
let pool = connect();

module.exports = pool;
