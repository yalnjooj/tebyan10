const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors= require('cors');
const bodyParser = require("body-parser");
const app = express();
const mongoose =require('mongoose');
const multer = require('multer');
const formidableMiddleware = require('express-formidable');


app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));

mongoose.connect('mongodb://localhost/youtube',{ useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(formidableMiddleware.parse({ keepExtensions: true }));
app.use(formidableMiddleware({
  encoding: 'utf-8',
  uploadDir: path.join('uploadedFilse/newOpnInsImg'),
  multiples: true, // req.files to be arrays of files
  keepExtensions: true
}));

//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadedFilse/newOpnInsImg',express.static(path.join('uploadedFilse/newOpnInsImg')));



// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use('/',  require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/buildUp', require('./routes/buildup'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
