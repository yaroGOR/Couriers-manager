const pool = require("./connectDB");

const getData = async (query) => {
  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

// const getDataWithParams = async (query, params) => {
//   try {
//     const data = await pool.query(query, [params]);
//     return data.rows;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = getData;
