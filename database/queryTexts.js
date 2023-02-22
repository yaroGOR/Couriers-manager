const QSelectCouriers = "SELECT * FROM couriers ORDER BY id ASC";
const QSelectCourierById = "SELECT * FROM couriers WHERE id = $1";
const QCreateCourier = "INSERT INTO couriers (name) VALUES ($1) RETURNING *";
const QUpdateCourier =
  "UPDATE couriers SET name = $1, email = $2 WHERE id = $3";
const QDeleteCourier = "DELETE FROM couriers WHERE id = $1";

const QSelectDestinations = "SELECT * FROM destinations ORDER BY id ASC";
const QCreateDestination =
  "INSERT INTO destinations (destination_name) VALUES ($1) RETURNING *";

const QSelectTasks = "SELECT * FROM tasks ORDER BY id ASC";
const QAllData =
  "SELECT t.id, t.start_time, t.end_time, c.name, d.destination_name, c.id AS couriers_id, d.id AS destination_id  FROM tasks t INNER JOIN couriers c ON c.id = t.courier_id INNER JOIN destinations d ON t.destination_id = d.id;";
// const QAllData_but_indexes_problem = "SELECT * FROM tasks,couriers,destinations WHERE tasks.courier_id=couriers.id AND tasks.destination_id = destinations.id"
const QSelectCourierWithId = `SELECT t.id, t.start_time, t.end_time, c.name, d.destination_name, c.id AS couriers_id, d.id AS destination_id  FROM tasks t INNER JOIN couriers c ON c.id = t.courier_id INNER JOIN destinations d ON t.destination_id = d.id WHERE c.id = $1`;

const QCreateTask =
  "INSERT INTO tasks (courier_id, destination_id, start_time, end_time) VALUES ($1,$2,$3,$4) RETURNING *";

const QDeleteTask = "DELETE FROM tasks WHERE id = $1";

const QCreateCouriers =
  " CREATE TABLE IF NOT EXISTS couriers ( ID SERIAL PRIMARY KEY, name VARCHAR(50) )";
const QCreateDestinations =
  "CREATE TABLE IF NOT EXISTS destinations ( ID SERIAL PRIMARY KEY, destination_name VARCHAR(50))";

  const QCreateTasks =
  `CREATE TABLE IF NOT EXISTS tasks (ID SERIAL PRIMARY KEY, courier_id INT REFERENCES couriers(id),  destination_id INT  REFERENCES destinations(id),  start_time DATE, end_time DATE, 
  CONSTRAINT check_courier_availability CHECK (check_overlapping_tasks(courier_id, start_time, end_time))
  )
    
`;

const QCreateFunctionCheckTime = `CREATE OR REPLACE FUNCTION check_overlapping_tasks(courier_id integer, start_time date, end_time date)
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
LANGUAGE plpgsql`


module.exports = {
  QSelectCouriers,
  QCreateCourier,
  QDeleteCourier,
  QSelectDestinations,
  QCreateDestination,
  QSelectTasks,
  QCreateTask,
  QDeleteTask,
  QAllData,
  QSelectCourierWithId,
  QCreateCouriers,
  QCreateDestinations,
  QCreateTasks,
  QCreateFunctionCheckTime
};
