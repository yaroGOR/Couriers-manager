const pg = require("pg");
const Pool = pg.Pool;
const connURL = process.env.PG_URI;
function connect() {
  console.log("connect = ", process.env.PORT);
  if (!process.env.PORT) {
    console.log("running localhost");
    return new Pool({
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DB,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
    });
  } else {
    console.log("connecting db on server");
    return new Pool({ connURL });
  }
}
let pool = connect();

module.exports = pool;
