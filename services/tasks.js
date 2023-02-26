const pool = require("../models/connectDB");

const getAllTasks = async () => {
  try {
    const results = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id) => {
  try {
    const results = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    return results.rows[0];
  } catch (error) {
    throw error;
  }
};

const createTask = async ({
  courier_id,
  destination_id,
  start_time,
  end_time,
}) => {
  try {
    await pool.query(
      "INSERT INTO tasks (courier_id, destination_id, start_time, end_time) VALUES ($1,$2,$3,$4) RETURNING *",
      [courier_id, destination_id, start_time, end_time]
    );
  } catch (error) {
    throw error;
  }
};

const updateTask = async (
  id,
  { courier_id, destination_id, start_time, end_time }
) => {
  try {
    await pool.query(
      "UPDATE tasks SET courier_id = $1, destination_id = $2, start_time=$3, end_time=$4 WHERE id = $5",
      [courier_id, destination_id, start_time, end_time, id]
    );
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
