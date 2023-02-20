const express = require('express')
const router = express.Router()
const tasks = require('../controllers/tasks')

const validations = require('../validators/validator')
const handleErrors = require('../middlewares/errorsHandler')

router.get('/', tasks.getTasks)
//router.get('/:id', tasks.getTaskById)
router.post('/new',validations.ValidateTaskInput(),handleErrors,tasks.createTask)
//router.put('/:id', tasks.updateTask)
router.delete('/:id', tasks.deleteTask)


module.exports=router;
