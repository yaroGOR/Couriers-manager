


const services = require("../services/tasks");
const { hadleControllerError } = require("../helpers/handleControllerErrors");

const getTasks = async (request, response) => {
  try {
    const tasks = await services.getAllTasks();
    response.status(200).json(tasks);
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const task = await services.getTaskById(id);
    response.status(200).json(task);
  } catch (error) {
    throw error;
  }
};

const createTask = async (request, response) => {
  try {
    const taskData = request.body;
    await services.createTask(taskData);
    response.status(201).redirect("/");
  } catch (error) {
    console.log('controller err', error)
    hadleControllerError(request, response, error);
  }
};

const updateTask = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const taskData = request.body;
    await services.updateTask(id, taskData);
    response.status(200).send(`Task modified with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await services.deleteTask(id);
    response.status(200).send(`Task deleted with ID: ${id}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
