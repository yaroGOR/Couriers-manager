
const pg = require("pg");

const Pool = pg.Pool;

function connect() {
  try {
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
      return new Pool({ connectionString: process.env.PG_URL });
    }
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    process.exit(1);
  }
}

const pool = connect();

module.exports = pool;

