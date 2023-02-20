const changeTime = require("../helpers/changeTime.js");

const renderHomePage = (req, res) => {
  var data = req.result;
  data.forEach((element) => {
    changeTime(element);
  });

  res.render("index", {
    data: data,
  });
};

const renderNewCourier = (req, res) => {
  let alerts = "";
  let data = "";

  if (req.query) {
    alerts = req.query.validationErrors;
  }
  if (req.body) {
    data = req.body.name;
  }

  res.render("newcourier", {
    alerts: alerts,
    data: data,
  });
};

const renderNewDestination = (req, res) => {
  let alerts = "";
  let data = "";

  if (req.query) {
    alerts = req.query.validationErrors;
  }
  if (req.body) {
    data = req.body.name;
  }
  res.render("newdestination", {
    alerts: alerts,
    data: data,
  });
};

const renderNewTask = (req, res) => {
  const alerts = [];
  var couriers = req.couriers;
  var destinations = req.destinations;
  let data = {
    name: "",
    destination_id: "",
    courier_id: "",
    start_time: "",
    end_time: "",
  };

  if (req.query) {
    alerts.push(req.query.validationErrors);
  }
  if (req.body) {
    data = req.body;
  }

  res.render("newtask", {
    couriers: couriers,
    destinations: destinations,
    alerts: alerts,
    data: data,
  });
};

module.exports = {
  renderHomePage,
  renderNewCourier,
  renderNewDestination,
  renderNewTask,
};
