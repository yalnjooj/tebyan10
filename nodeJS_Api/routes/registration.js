const express = require('express');
const router = express.Router();

const  passport = require('passport');


router.post('/register', function (req, res, next) {

  passport.authenticate('local-signup', function (err, user, info) {

    if (err) { return res.status(501).json( { message: 'المستخدم موجود بالفعل!' }); }
    if (user) { return res.status(200).json( { message: 'تم تسجيل المستخدم بنجاح!' }); }

  })(req, res, next);

});



module.exports = router;
