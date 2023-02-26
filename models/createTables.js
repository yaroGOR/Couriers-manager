const pool = require("./connectDB");

const QCreateCouriers =
  " CREATE TABLE IF NOT EXISTS couriers ( ID SERIAL PRIMARY KEY, name VARCHAR(50) )";
const QCreateDestinations =
  "CREATE TABLE IF NOT EXISTS destinations ( ID SERIAL PRIMARY KEY, destination_name VARCHAR(50))";

const QCreateTasks = `CREATE TABLE IF NOT EXISTS 
tasks (ID SERIAL PRIMARY KEY, courier_id INT REFERENCES couriers(id),  destination_id INT  REFERENCES destinations(id),  start_time DATE, end_time DATE, 
  CONSTRAINT check_courier_availability 
  CHECK (check_overlapping_tasks(courier_id, start_time, end_time))
  )
    
`;
const QCreateFunctionCheckTime = `CREATE OR REPLACE FUNCTION 
check_overlapping_tasks(courier_id integer, start_time date, end_time date)
RETURNS BOOLEAN AS
$$
BEGIN
  RETURN NOT EXISTS (
    SELECT 1 FROM tasks t
    WHERE t.courier_id = check_overlapping_tasks.courier_id
    AND ((t.start_time, t.end_time) OVERLAPS (check_overlapping_tasks.start_time, check_overlapping_tasks.end_time))
  );
END;
$$
LANGUAGE plpgsql`;

async function createTables() {
  const tablesQ = [
    QCreateFunctionCheckTime,
    QCreateCouriers,
    QCreateDestinations,
    QCreateTasks,
  ];
  try {
    for (let i = 0; i < tablesQ.length; i++) {
      await pool.query(tablesQ[i]);
      console.log("Table created");
    }
  } catch (error) {
    console.log(error);
    console.log("Error while table creating");
  }
}

module.exports = createTables;
