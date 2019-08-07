const express = require('express');
const router = express.Router();

var User = require('../models/user');


router.post('/ReSaveUser', function (req, res, next) {

  User.findByIdAndUpdate(req.body.id, { $set: {
    username: req.body.username,
    email: req.body.email,
  }
  }, (err, result) => {
    if (!err) {
      return res.status(200).json({ message: 'تم حفظ المستخدم بنجاح!' })
    }
    else {
      console.log(err);
    }
  });
});



module.exports = router;
