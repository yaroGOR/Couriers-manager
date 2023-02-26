const pool = require("../models/connectDB");

const getAllDestinations = async () => {
  try {
    const results = await pool.query(
      "SELECT * FROM destinations ORDER BY id ASC"
    );
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const getDestinationById = async (id) => {
  try {
    const results = await pool.query(
      "SELECT * FROM destinations WHERE id = $1",
      [id]
    );
    return results.rows[0];
  } catch (error) {
    throw error;
  }
};

const createDestination = async (name) => {
  try {
    await pool.query(
      "INSERT INTO destinations (destination_name) VALUES ($1) RETURNING *",
      [name]
    );
  } catch (error) {
    throw error;
  }
};

const updateDestination = async (id, name) => {
  try {
    await pool.query(
      "UPDATE destinations SET destination_name = $1 WHERE id = $2",
      [name, id]
    );
  } catch (error) {
    throw error;
  }
};

const deleteDestination = async (id) => {
  try {
    await pool.query("DELETE FROM destinations WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};
