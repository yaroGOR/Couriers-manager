

const QSelectCouriers = "SELECT * FROM couriers ORDER BY id ASC";
const QSelectCourierById= 'SELECT * FROM couriers WHERE id = $1'
const QCreateCourier='INSERT INTO couriers (name) VALUES ($1) RETURNING *'
const QUpdateCourier='UPDATE couriers SET name = $1, email = $2 WHERE id = $3'
const QDeleteCourier='DELETE FROM couriers WHERE id = $1'

const QSelectDestinations = 'SELECT * FROM destinations ORDER BY id ASC'

const QSelectTasks = 'SELECT * FROM tasks ORDER BY id ASC'
const QAllData = 'SELECT t.id, t.start_time, t.end_time, c.name, d.destination_name, c.id AS couriers_id, d.id AS destination_id  FROM tasks t INNER JOIN couriers c ON c.id = t.courier_id INNER JOIN destinations d ON t.destination_id = d.id;'
// const QAllData_but_indexes_problem = "SELECT * FROM tasks,couriers,destinations WHERE tasks.courier_id=couriers.id AND tasks.destination_id = destinations.id"
const QSelectCourierWithId = `SELECT t.id, t.start_time, t.end_time, c.name, d.destination_name, c.id AS couriers_id, d.id AS destination_id  FROM tasks t INNER JOIN couriers c ON c.id = t.courier_id INNER JOIN destinations d ON t.destination_id = d.id WHERE c.id = $1`


module.exports = {
    QSelectCouriers,
    QSelectDestinations,
    QSelectTasks,
    QAllData,
    QSelectCourierWithId
}