const pool = require('../models/connectDB')

const getAllData = async () => {
    try {
      const { rows } = await pool.query(  "SELECT t.id, t.start_time, t.end_time, c.name, d.destination_name, c.id AS couriers_id, d.id AS destination_id  FROM tasks t INNER JOIN couriers c ON c.id = t.courier_id INNER JOIN destinations d ON t.destination_id = d.id;"
      );
      return rows;
    } catch (error) {
        console.log('Error while getting  all data', error)
      throw error;
    }
  };


  module.exports = {getAllData}