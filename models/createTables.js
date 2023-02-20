const pool = require("../database/connectDB");
const QCreateCouriers =
  " CREATE TABLE IF NOT EXISTS couriers ( ID SERIAL PRIMARY KEY, name VARCHAR(50) )";
const QCreateDestinations =
  "CREATE TABLE IF NOT EXISTS destinations ( ID SERIAL PRIMARY KEY, destination_name VARCHAR(50))";
const QCreateTasks =
  "CREATE TABLE IF NOT EXISTS tasks (ID SERIAL PRIMARY KEY, courier_id INT REFERENCES couriers(id),  destination_id INT  REFERENCES destinations(id),  start_time DATE, end_time DATE)";

function createTables() {
  const tablesQ = [QCreateCouriers, QCreateDestinations, QCreateTasks];
  tablesQ.forEach((query) => {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error)
        console.log('error while table creating')
      }
      console.log('Tables created')

    })})

  
}

module.exports = createTables