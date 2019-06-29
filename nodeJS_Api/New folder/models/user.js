var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// Define collection and schema for registrationuser
var userSchema = new Schema({
  userType: {
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
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  creation_dt: {
    type: Date,
    required: true
  }
});

userSchema.statics.hashPassword = function hashPassword(password){
  return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
  return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',userSchema);