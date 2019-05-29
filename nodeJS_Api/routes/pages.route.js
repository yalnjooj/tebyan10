const express = require('express');
const app = express();
const tebyanRoutes = express.Router();

// Require Business model in our routes module
let Usernamemodel = require('../models/usernamemodel');

// Defined store route
tebyanRoutes.route('/addnewuser').post(function (req, res) {
  let usernamemodel = new Usernamemodel(req.body);
  usernamemodel.save()
    .then(usernamemodel => {
      res.status(200).json({'newuser': 'newuser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
tebyanRoutes.route('/').get(function (req, res) {
    Usernamemodel.find(function (err, usernamemodel){
    if(err){
      console.log(err);
    }
    else {
      res.json(usernamemodel);
    }
  });
});

// Defined edit route
tebyanRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Usernamemodel.findById(id, function (err, usernamemodel){
      res.json(usernamemodel);
  });
});

//  Defined update route
tebyanRoutes.route('/update/:id').post(function (req, res) {
    Usernamemodel.findById(req.params.id, function(err, next, usernamemodel) {
    if (!usernamemodel)
      return next(new Error('Could not load Document'));
    else {
        usernamemodel.person_name = req.body.person_name;
        usernamemodel.business_name = req.body.business_name;
        usernamemodel.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
tebyanRoutes.route('/delete/:id').get(function (req, res) {
    Usernamemodel.findByIdAndRemove({_id: req.params.id}, function(err, usernamemodel){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = tebyanRoutes;