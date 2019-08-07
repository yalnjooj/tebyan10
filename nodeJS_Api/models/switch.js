var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for ............
var switchSchema = new Schema({
  offOnInstitute: {
    type: Boolean,
    default: false,
  },
  offOnSingle: {
    type: Boolean,
    default: false,
  }
});


module.exports = mongoose.model('Switch',switchSchema, 'switch');
