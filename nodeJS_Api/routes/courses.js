var express = require('express');
var router = express.Router();
const NewInstitute = require('../models/newInsSchema');



router.get('/reqOpnNewIns', function (req, res, next) {

  NewInstitute.find({}, (err, event) => {
    if (!err)
      res.status(200).json(event);
    else
      console.log(err);
  });

});



module.exports = router;
