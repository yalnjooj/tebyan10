// const express = require('express');
// const app = express();

// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const config = require('./config/DB');
// const session = require("express-session");
// const passport = require('passport');
// const passportSetup = require('./config/passport-setup');
// const pagesRoute = require('./routes/pages.route');

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useNewUrlParser: true }, (err) => {
//   if (!err)
//     console.log('Database is connected')
//   else
//     console.log('Can not connect to the database' + err)
// });


// // bring body parser
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// // session
// app.use(session({
//   secret: "omarnohKEY1559171254810",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {maxAge: 60000 * 5}
// }));

// // bring passport
// app.use(passport.initialize());
// app.use(passport.session());



// app.use(bodyParser.json());
// app.use(cors());
// app.use('/nodejsconnect', pagesRoute);
// const port = process.env.PORT || 4000;



// const server = app.listen(port, function () {
//   console.log('Listening on port ' + port);
// });