const hadleControllerError = (req, res, err) => {
    if (err.code == 23514) {
  
      const errorMsg='Courier is busy at this time'
      const URLString =
      "/" + req.headers.referer.split("?")[0].split("/").slice(-1)[0];
        
        res.redirect(307, URLString + "?validationErrors=" + errorMsg);
  
    }
  }

  module.exports={hadleControllerError}