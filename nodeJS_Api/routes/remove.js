const express = require('express');
const router = express.Router();

var User = require('../models/user');


router.delete('/removeUser/:id', function (req, res, next) {
console.log(req.params.id);

  User.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      return res.status(200).json({ message: 'تم حذف المستخدم بنجاح!' })
    }
    else {
      console.log(err);
    }
  });
});



module.exports = router;
