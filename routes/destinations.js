const express = require('express')
const router = express.Router()
const destinations = require('../controllers/destination')

const validations = require('../validators/validator')
const handleErrors = require('../middlewares/errorsHandler')

router.get('/', destinations.getDestinations)
//router.get('/:id', destinations.getDestinationById)
router.post('/new',validations.ValidateDestinationsInput(),handleErrors, destinations.createDestination)
//router.put('/:id', destinations.updateDestination)
//router.delete('/:id', destinations.deleteDestination)

module.exports=router;
