
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// Models
const User = require('./models/user');



// =========================================================================
// module.exports enables app.js to use require('./config/passport')(passport)

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField: 'email',    // 'email' refers to the req.body.email submitted with login.ejs form where the <input name="email" ...>
  passwordField: 'password', // 'password' refers to the req.body.password submitted with login.ejs form where the <input name="password" ...>
  passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
}, function (req, username, password, done) {

  // // if the user is already logged in:
  // if (req.user) {
  //   console.log('is Done');

  //   // just pass back his data
  //   return done(null, req.user);
  // }

  // we lookup a user with a matching 'email'
  User.findOne({ email: username }, function (err, user) {
    if (err) { return done(err); }

    // Note: the callback function 'done' is used here like 'return' to resume progam execution.
    // it's first parameter is the error, if no error, we pass null.
    // the second parameter is the user object, if error, we pass false.
    // if no user found
    if (!user) {
      // this means fail the login
      return done(null, false, { message: 'لا يوجد مستخدم مسجل بهذا العنوان!' });
    }

    // check password validity
    if (!user.validPassword(password)) {
      // this means fail login
      return done(null, false, { message: 'كلمة المرور غير صحيحة!' });
    }

    // otherwise, pass user object with no errors
    return done(null, user)
  })
}
));

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
passport.use('local-signup', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField: 'newemail',
  passwordField: 'inputPassword1',
  passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
}, function (req, username, password, done) {


  // we check if no other user has already taken this email
  User.findOne({ email: username }, function (user) {

    // check if a user found with this email
    if (user) {
      // fail the signup
      return done(null, false);
    }

    // otherwise store user info in the Database
    new User({
      userType: req.body.newaccType,
      username: req.body.newaccName,
      email: req.body.newemail,
      password: User.generateHash(req.body.inputPassword1),
    }).save(function (err, savedUser) {
      if (err) {
        return done(err, false)
      }
      // Success. Pass back savedUser
      return done(null, savedUser);
    })

  })
}
));

// passport session setup ==================================================
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

