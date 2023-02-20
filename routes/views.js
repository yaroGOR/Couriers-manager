const express = require('express')
const router = express.Router()
const middlewares = require('../middlewares/viewsMiddlewares')
const controller = require('../controllers/views')

router.get('/', middlewares.sendTableData, controller.renderHomePage)

//dublicates with POST req method are for saving previous data input
router.get("/newcourier", controller.renderNewCourier);
router.post("/newcourier", controller.renderNewCourier);

router.get("/newdestination", controller.renderNewDestination);
router.post("/newdestination", controller.renderNewDestination);

router.get("/newtask",middlewares.sendAlerts, middlewares.sendCouriers, middlewares.sendDestinations, controller.renderNewTask);
router.post("/newtask",middlewares.sendAlerts, middlewares.sendCouriers, middlewares.sendDestinations, controller.renderNewTask );

module.exports=router;
