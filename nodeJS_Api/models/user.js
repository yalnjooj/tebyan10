var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// Define collection and schema for registrationuser
var userSchema = new Schema({
  userType: { // nickname
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
  //  required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  creation_dt: {
    type: Date,
    required: true,
    default: Date.now()
  },
}, {timestamps: true});

userSchema.statics.generateHash = function hashPassword(password){
  return bcrypt.hashSync(password, 10);
}

userSchema.methods.validPassword = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('RegisterUser',userSchema, 'users');
module.exports = mongoose.model('User',userSchema, 'users');
module.exports = mongoose.model('GetData',userSchema, 'users');
