const { body } = require("express-validator");

const ValidateTaskInput = () => {
  return [
    body("name").notEmpty().withMessage("Enter task name or short description"),
    body("start_time")
      .notEmpty()
      .withMessage("Enter when courier should start delivery"),
    body("end_time")
      .notEmpty()
      .withMessage("Enter when courier should deliver his order"),
    body("courier_id").notEmpty().withMessage("Select courier"),
  ];
};

const ValidateCouriersInput = () => {
  return [body("name").notEmpty().withMessage("Courier`s name can`t be empty")];
};
const ValidateDestinationsInput = () => {
  return [
    body("name").notEmpty().withMessage("Destination name can`t be empty"),
  ];
};

module.exports = {
  ValidateTaskInput,
  ValidateCouriersInput,
  ValidateDestinationsInput,
};
