var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for registrationuser
var insertQuestion = new Schema({
  
    quistion: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isView: {
    type: Boolean,
    required: true
  },
  creation_dt: {
    type: Date,
    required: true
  }
});



module.exports = mongoose.model('InsertQuestion',insertQuestion,'Questions');