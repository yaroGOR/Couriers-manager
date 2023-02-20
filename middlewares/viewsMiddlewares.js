const getData = require("../database/getData");
const queries = require("../database/queryTexts");

const sendCouriers = (req, res, next) => {
  try {
    getData(queries.QSelectCouriers).then((result) => {
      req.couriers = result;
      next();
    });
  } catch (err) {
    return res.status(500).send({
      msg: "error",
      err,
    });
  }
};
const sendDestinations = (req, res, next) => {
  try {
    getData(queries.QSelectDestinations).then((result) => {
      req.destinations = result;
      next();
    });
  } catch (err) {
    return res.status(500).send({
      msg: "error",
      err,
    });
  }
};
const sendAlerts = (req, res, next) => {
  console.log("eq.locals");
  console.log(req.query);
  console.log("alerts", req.body);

  return next();
};

const sendTableData = (req, res, next) => {
  try {
    getData(queries.QAllData).then((result) => {
      req.result = result;
      console.log(result);

      next();
    });
  } catch (err) {
    return res.status(500).send({
      msg: "error",
      err,
    });
  }
};

module.exports = {
  sendAlerts,
  sendCouriers,
  sendDestinations,
  sendTableData,
};
