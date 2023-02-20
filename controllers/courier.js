// get all couriers - GET /couriers
// get selected id courier - GET  /couriers/:id
//create courier - POST /couriers
// update courier
//     PUT /couriers/:id
// delete courier  DELETE /couriers/:id
const pool = require("../database/connectDB");
const queryTexts = require("../database/queryTexts");
// get all couriers: id, name
const getCouriers = (request, response) => {
  pool.query(queryTexts.QSelectCouriers, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send({ couriers: results.rows });
  });
};

// get simple courier with req.params.id: id, name
const getCourierById = (request, response) => {
  // const id = parseInt(request.params.id);
  // pool.query("SELECT * FROM couriers WHERE id = $1", [id], (error, results) => {
  //   if (error) {
  //     throw error;
  //   }
  //   response.status(200).json(results.rows);
  // });
};

const createCourier = (request, response) => {
  const { name } = request.body;
  pool.query(queryTexts.QCreateCourier, [name], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).redirect("/");
  });
};

const updateCourier = (request, response) => {
  // const id = parseInt(request.params.id);
  // const { name, email } = request.body;
  // pool.query(
  //   "UPDATE couriers SET name = $1, email = $2 WHERE id = $3",
  //   [name, email, id],
  //   (error, results) => {
  //     if (error) {
  //       throw error;
  //     }
  //     response.status(200).send(`Courier modified with ID: ${id}`);
  //   }
  // );
};

const deleteCourier = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(queryTexts.QDeleteCourier, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Courier deleted with ID: ${id}`);
  });
};

module.exports = {
  getCouriers,
  getCourierById,
  createCourier,
  updateCourier,
  deleteCourier,
};
