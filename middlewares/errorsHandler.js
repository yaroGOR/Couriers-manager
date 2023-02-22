const { validationResult } = require("express-validator");

const handleErrors = (req, res, next) => {
  const URLString =
    "/" + req.headers.referer.split("?")[0].split("/").slice(-1)[0];
  const hasErrors = validationResult(req);
  if (!hasErrors.isEmpty()) {
    const errors = hasErrors.errors;
    res.body = req.body;
    return res.redirect(307, URLString + "?validationErrors=" + errors[0].msg);
  } else {
    return next();
  }
};


module.exports = handleErrors;
