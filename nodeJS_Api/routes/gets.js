var express = require('express');
var router = express.Router();

var GetData = require('../models/user');


router.get('/accountsData', (req, res, next) => {

  GetData.find({}, (err, data) => {
    if (!err)
    return res.status(200).json(data);
    else
      console.log(err);
  });

});


module.exports = router;

