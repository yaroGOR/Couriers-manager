const { getAllData } = require("../services/alldata");
const { getCouriers } = require("../services/couriers");
const { getAllDestinations } = require("../services/destinations");

const sendCouriers = async (req, res, next) => {
  try {
    const result = await getCouriers();
    req.couriers = result;
    next();
  } catch (err) {
    return res.status(500).send({
      msg: "Error while sending destinations",
      err,
    });
  }
};

const sendDestinations = async (req, res, next) => {
  try {
    const result = await getAllDestinations();
    req.destinations = result;
    next();
  } catch (err) {
    return res.status(500).send({
      msg: "Error while sending destinations",
      err,
    });
  }
};

const sendTableData = async (req, res, next) => {
  try {
    const result = await getAllData();
    req.result = result;
    next();
  } catch (err) {
    return res.status(500).send({
      msg: "Error while sending table data",
      err,
    });
  }
};

module.exports = {
  sendCouriers,
  sendDestinations,
  sendTableData,
};
