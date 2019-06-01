var express = require('express');
var router = express.Router();
 var User = require('../models/user')
//var mongoose = require('mongoose');
//var User = mongoose.model('User');
/* GET users listing. */

//   res.send('respond with a resource');
// });

router.post('/register', function (req, res, next) {
  addToDB(req, res);
});

async function addToDB(req, res) {

  var user = new User({
    userType: req.body.newaccType,
    username: req.body.newaccName,
    email: req.body.newemail,
    password: User.hashPassword(req.body.inputPassword1),
    isActive: false,
    creation_dt: Date.now()
  });

  try {
    var dou = await user.save();
    return res.status(201).json()
  }
  catch (err) {
    return res.status(501).json(err)
  }
}

module.exports = router;
