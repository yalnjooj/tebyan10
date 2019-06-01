var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String
});
// Define collection and schema for registrationuser
// var userSchema = new mongoose.Schema({
//   userType: {
//     type: String,
//     required: true
//   },
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   isActive: {
//     type: Boolean,
//     required: true
//   },
//   dateOfRgistration: {
//     type: Date,
//     required: true
//   },
//   hash: String,
//   salt: String
// });

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};


userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({ _id: this._id, email: this.email, name: this.name, exp: parseInt(expiry.getTime() / 1000), }, "omarnohKEY1559171254810x");
  // DO NOT KEEP YOUR SECRET IN THE CODE!
};


// module.exports = mongoose.model('Usermodel', Usermodel);