const pool = require("../database/connectDB");
const qTexts = require("../database/queryTexts");
function createTables() {
  const tablesQ = [
    qTexts.QCreateCouriers,
    qTexts.QCreateDestinations,
    qTexts.QCreateTasks,
  ];
  tablesQ.forEach((query) => {
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error);
        console.log("Error while table creating");
      }
      console.log("Table created");
    });
  });
}

module.exports = createTables;
