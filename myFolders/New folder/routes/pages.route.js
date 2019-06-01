// const express = require('./node_modules/express');
// const app = express();
// const tebyanRoutes = express.Router();
// const passport = require('./node_modules/passport');

// // Require Business model in our routes module
// let Usermodel = require('../models/users');

// // Defined store route
// tebyanRoutes.route('/addnewuser').post((req, res) => {
//     passport.authenticate('local.signup',(err,uer,data)=>{
        
//     });
//     let Usermodel = new Usermodel(req.body);
//     Usermodel.save(err => {
//         if (!err)
//             res.status(200).json({ 'newuser': 'newuser in added successfully' });

//         else
//             res.status(400).send("unable to save to database");

//     })
// });


// // Defined get data(index or listing) route
// tebyanRoutes.route('/').get(function (req, res) {
//     Usermodel.find(function (err, Usermodel) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json(Usermodel);
//         }
//     });
// });

// // Defined edit route
// tebyanRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Usermodel.findById(id, function (err, Usermodel) {
//         res.json(Usermodel);
//     });
// });

// //  Defined update route
// tebyanRoutes.route('/update/:id').post(function (req, res) {
//     Usermodel.findById(req.params.id, function (err, next, Usermodel) {
//         if (!Usermodel)
//             return next(new Error('Could not load Document'));
//         else {
//             Usermodel.person_name = req.body.person_name;
//             Usermodel.business_name = req.body.business_name;
//             Usermodel.business_gst_number = req.body.business_gst_number;

//             business.save().then(business => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });

// // Defined delete | remove | destroy route
// tebyanRoutes.route('/delete/:id').get(function (req, res) {
//     Usernamemodel.findByIdAndRemove({ _id: req.params.id }, function (err, usernamemodel) {
//         if (err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

// module.exports = tebyanRoutes;