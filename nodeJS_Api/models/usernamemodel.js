const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for registrationuser
let registrationuser = new Schema({
    typeK: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  isActive: {
    type: Boolean
  },
  reguteDdate: {
    type: Date
  }
},{
    collection: 'registration'
});

module.exports = mongoose.model('registrationuser', registrationuser);