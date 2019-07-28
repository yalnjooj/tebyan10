var express = require('express');
var router = express.Router();
var User = require('../models/user');
var SearchCertificats = require('../models/searchCertificats');
var InsertQuestion = require('../models/InsertQuestion');
var GetTrainersInfo = require('../models/searchCertificats');

var passport = require('passport');

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
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}


router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function (err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});


router.get('/user', isValidUser, function (req, res, next) {
  let info = userType(req.user)


  return res.status(200).json(info);
});

router.get('/logout', isValidUser, function (req, res, next) {
  req.logout();
  return res.status(200).json({ message: 'Logout Success' });
})

function isValidUser(req, res, next) {
  if (req.isAuthenticated()) { console.log('user is exesst!'); next(); }
  else { console.log('use dosnot there!'); return res.status(401).json({ message: 'Unauthorized Request' }); }
}

function userType(type) {
  let userType = '';


  switch (type.userType) {

    case 'mainuser':
      userType = 'مدير النظام';
      break;

    case 'education':
      userType = 'قسم التعليم';
      break;

    case 'development':
      userType = 'قسم التدريب والتطوير';
      break;

    case 'media':
      userType = 'قسم الاعلام';
      break;

    case 'institute':
      userType = 'حساب جهة';
      break;

    case 'trainer':
      userType = 'حساب مدرب';
      break;

    case 'supervisor':
      userType = 'حساب مشرف';
      break;

    default:
      userType = 'مستخدم غير معروف!';
      break;
  }

  info = {
    id: type._id,
    username: type.username,
    userType: userType,
    email: type.email
  }


  return info;
}

router.post('/trainerSearch', function (req, res, next) {

  SearchCertificats.findOne({ CertificateNumber: req.body.trainerFild }, (err, event) => {
    if (!err)
      res.status(200).json(event);
    else
      console.log(err);
  });

});

router.post('/insertQuestion', function (req, res, next) {
  insertQuestion(req, res);
});


async function insertQuestion(req, res) {

  var insertQuestion = new InsertQuestion({
    quistion: req.body.quistion,
    answer: req.body.answer,
    isView: true,
    creation_dt: Date.now()
  });

  try {
    doc = await insertQuestion.save();
    return res.status(201).json('تمت الإضافة بنجاح!');
  }
  catch (err) {
    return res.status(501).json(err);
  }
}

router.get('/getAnwersQuestions', function (req, res, next) {

  InsertQuestion.find({}, (err, event) => {
    if (!err)
      res.status(200).json(event);
    else
      console.log(err);
  });

});

router.get('/getTrainersInfo', function (req, res, next) {

  GetTrainersInfo.find({}, (err, event) => {
    if (!err)
      res.status(200).json(event);
    else
      console.log(err);
  });

});

module.exports = router;
