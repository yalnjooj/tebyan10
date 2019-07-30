const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors= require('cors');
const bodyParser = require("body-parser");
const mongoose =require('mongoose');
const multer = require('multer');
const formidableMiddleware = require('express-formidable');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials: true
}));

mongoose.connect('mongodb://localhost/youtube',{ useNewUrlParser: true, useCreateIndex: true })
.then(()=>{
  console.log('Connected to database!');
})
.catch(()=>{
  console.log('Connection failed!');

});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());


// session
app.use(session({
  name:'mynassasadame.sid',
  resave:false,
  saveUninitialized:false,
  secret:'sesadawdwqdasscret',

  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 1 // 1 day
  }),
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false,
    expires: new Date(Date.now() + 60 * 60 * 1000) // 1 hour
  }
}));

//passport
require('./passport-config')(passport);
app.use(passport.initialize());
app.use(passport.session());

// app.use('/',  require('./routes/index'));
app.use('/users', require('./routes/users'));

app.use(formidableMiddleware({
  encoding: 'utf-8',
  uploadDir: path.join('uploadedFilse/newOpnInsImg'),
  multiples: true, // req.files to be arrays of files
  keepExtensions: true
}));
app.use('/buildUp', require('./routes/buildup'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadedFilse/newOpnInsImg',express.static(path.join('uploadedFilse/newOpnInsImg')));




module.exports = app;
