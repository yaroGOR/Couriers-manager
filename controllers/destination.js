const services = require("../services/destinations");

const getDestinations = async (request, response) => {
  try {
    const destinations = await services.getAllDestinations();
    response.status(200).json(destinations);
  } catch (error) {
    throw error;
  }
};

const getDestinationById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const destination = await services.getDestinationById(id);
    response.status(200).json(destination);
  } catch (error) {
    throw error;
  }
};

const createDestination = async (request, response) => {
  try {
    const { name } = request.body;
    await services.createDestination(name);
    response.status(201).redirect("/");
  } catch (error) {
    throw error;
  }
};

const updateDestination = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { name } = request.body;
    await services.updateDestination(id, name);
    response.status(200).send(`Destination modified with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};

const deleteDestination = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await services.deleteDestination(id);
    response.status(200).send(`Destination deleted with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};
