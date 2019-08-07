var express = require('express');
var router = express.Router();

var Switch = require('../models/switch');
var User = require('../models/user');


router.post('/OffOn', (req, res, next) => {
  // var user = new Switch({
  //   offOnSingle: false,
  // });
  // var doc = user.save();

  switch (req.body.offOn) {
    case 'offOnInstitute':
      Switch.find({}, (err, event) => {
        if (!err) {
          var query = { offOnInstitute: event[0].offOnInstitute };
          Switch.updateOne(query, { $set: { offOnInstitute: !event[0].offOnInstitute } }, (err, result) => {
            if (!err) {
              Switch.find({}, (err, event) => {
                return res.status(200).json({ instituteOffOn: event[0].offOnInstitute })
              });
            }
            else {
              console.log(err);
            }
          });
        }
        else {
          console.log(err);
        }
      });
      break;
    case 'offOnSingle':
        Switch.find({}, (err, event) => {
          if (!err) {
            var query = { offOnSingle: event[1].offOnSingle };
            Switch.updateOne(query, { $set: { offOnSingle: !event[1].offOnSingle } }, (err, result) => {
              if (!err) {
                Switch.find({}, (err, event) => {
                  return res.status(200).json({ singleOffO: event[1].offOnSingle })
                });
              }
              else {
                console.log(err);
              }
            });
          }
          else {
            console.log(err);
          }
        });
      break;

    default:
      console.log('not equal the lest!!!');
      break;
  }

});

router.get('/OffOn', (req, res, next) => {

  Switch.find({}, (err, event) => {
    if (!err) {
      return res.status(200).json({ instituteOffOn: event[0].offOnInstitute,
        singleOffO: event[1].offOnSingle
      });

    }
    else {
      console.log(err);
    }
  });


});

router.put('/activeUser', (req, res, next) => {

  User.findById(req.body.id, (err, event) => {
    if (!err) {
      User.findByIdAndUpdate(event._id, { $set: { isActive: !event.isActive } }, (err, result) => {
        if (!err) {
            return res.status(200).json('تم التفعيل بنجاح!')
        }
        else {
          console.log(err);
        }
      });
    }
    else {
      console.log(err);
    }
  });

});



module.exports = router;
