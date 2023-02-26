const pool = require("../models/connectDB");

const getCouriers = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM couriers");
    return rows;
  } catch (error) {
    throw error;
  }
};

const getCourierById = async (id) => {
  try {
    const { rows } = await pool.query("SELECT * FROM couriers WHERE id = $1", [
      id,
    ]);
    return rows;
  } catch (error) {
    throw error;
  }
};

const createCourier = async (name) => {
  try {
    await pool.query("INSERT INTO couriers (name) VALUES ($1) RETURNING *", [
      name,
    ]);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCourier = async (name, id) => {
  try {
    await pool.query("UPDATE couriers SET name = $1 WHERE id = $2", [name, id]);
  } catch (error) {
    throw error;
  }
};
const deleteCourier = async (id) => {
  try {
    await pool.query("DELETE FROM couriers WHERE id = $1", [id]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCouriers,
  getCourierById,
  createCourier,
  updateCourier,
  deleteCourier,
};
