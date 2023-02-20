// dispaly homepage - GET /
// get all tasks - GET /tasks
// get selected id task - GET  /tasks/:id
//create task - POST /tasks
// update task  
//    PUT /tasks/:id
// delete task  DELETE /tasks/:id
const pool = require('../database/connectDB')


const getTasks = (request, response) => {
    pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getTaskById = (request, response) => {
    // const id = parseInt(request.params.id)
  
    // pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   response.status(200).json(results.rows)
    // })
  }

  const createTask = (request, response) => {
    const { courier_id, destination_id, start_time, end_time } = request.body
    pool.query('INSERT INTO tasks (courier_id, destination_id, start_time, end_time) VALUES ($1,$2,$3,$4) RETURNING *', [courier_id,destination_id,start_time, end_time], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).redirect('/')
    })
  }

  const updateTask = (request, response) => {
    // const id = parseInt(request.params.id)
    // const { courier_id, destination_id, start_time, end_time } = request.body
  
    // pool.query(
    //   'UPDATE tasks SET courier_id = $1, destination_id = $2, start_time=$3, end_time=$4 WHERE id = $5',
    //   [courier_id, destination_id, start_time, end_time, id],
    //   (error, results) => {
    //     if (error) {
    //       throw error
    //     }
    //     response.status(200).send(`Task modified with ID: ${id}`)
    //   }
    // )
  }

  const deleteTask = (request, response) => {
    console.log(request.params.id)
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Task deleted with ID: ${id}`)
    })
  }


  module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
  }