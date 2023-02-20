// dispaly homepage - GET /
// get all destinations - GET /destinations
// get selected id courier - GET  /destinations/:id
//create destination - POST /destinations
// update destination  PUT /destinations/:id
// delete courier  DELETE /destinations/:id
const pool = require('../database/connectDB')


const getDestinations = (request, response) => {
    pool.query('SELECT * FROM destinations ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getDestinationById = (request, response) => {
    // const id = parseInt(request.params.id)
  
    // pool.query('SELECT * FROM destinations WHERE id = $1', [id], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   response.status(200).json(results.rows)
    // })
  }

  const createDestination = (request, response) => {
    const { name } = request.body
  
    pool.query('INSERT INTO destinations (destination_name) VALUES ($1) RETURNING *', [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).redirect('/')
    })
  }

  const updateDestination = (request, response) => {
    // const id = parseInt(request.params.id)
    // const { name } = request.body
  
    // pool.query(
    //   'UPDATE destinations SET destination_name = $1 WHERE id = $2',
    //   [name, id],
    //   (error, results) => {
    //     if (error) {
    //       throw error
    //     }
    //     response.status(200).send(`Destination modified with ID: ${id}`)
    //   }
    // )
  }

  const deleteDestination = (request, response) => {
    // const id = parseInt(request.params.id)
  
    // pool.query('DELETE FROM destinations WHERE id = $1', [id], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   response.status(200).send(`Destination deleted with ID: ${id}`)
    // })
  }


  module.exports = {
    getDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination,
  }