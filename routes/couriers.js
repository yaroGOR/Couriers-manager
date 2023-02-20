const express = require('express')
const router = express.Router()
const couriers = require('../controllers/courier')
const validations = require('../validators/validator')
const handleErrors = require('../middlewares/errorsHandler')

router.get('/', couriers.getCouriers)
//router.get('/:id', couriers.getCourierById)
router.post('/new',validations.ValidateCouriersInput(), handleErrors,  couriers.createCourier)
//router.put('/:id', couriers.updateCourier)
//router.delete('/:id', couriers.deleteCourier)

module.exports=router;
