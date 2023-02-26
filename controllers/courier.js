// get all couriers - GET /couriers
// get selected id courier - GET  /couriers/:id
//create courier - POST /couriers
// update courier
//     PUT /couriers/:id
// delete courier  DELETE /couriers/:id
const services = require('../services/couriers')
// get all couriers: id, name


const getCouriers = async (request, response) => {
  try {
    const couriers = await services.getCouriers();
    response.status(200).send({ couriers });
  } catch (error) {
    throw error;
  }
};

// get simple courier with req.params.id: id, name
const getCourierById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const courier = await services.getCourierById(id)
    response.status(200).json(courier);
    } catch (error) {
    throw error;
    }
    
};

const createCourier = async (request, response) => {
  try {
    console.log('createcour.controller')
    const { name } = request.body;
    await services.createCourier(name)
    response.status(201).redirect("/");
  } catch (error) {
    throw error;
  }
};


const updateCourier = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { name } = request.body;
    await services.updateCourier(name, id)
    response.status(200).send(`Courier modified with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};


const deleteCourier = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await services.deleteCourier(id)
    response.status(200).send(`Courier deleted with ID: ${id}`);
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
