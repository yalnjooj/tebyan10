var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for new Institute
var newInsSchema = new Schema({
  instituteName: {
    type: String,
    required: true
  }, licensOfInstitute: {
    type: String,
    required: true
  }, emailOfInstitute: {
    type: String,
    required: true
  }, areas: {
    type: String,
    required: true
  }, cities: {
    type: String,
    required: true
  }, nameOfTheInstituteDirector: {
    type: String,
    required: true
  }, numberOfTheInstituteDirector: {
    type: Number,
    required: true
  }, digitsOfTeachersInInstitute: {
    type: Number,
    required: true
  }, digitsOfClassesInInstitute: {
    type: Number,
    required: true
  }, digitsOfWomensInstitutes: {
    type: Number,
    required: true
  }, methodologyLetter: {
    type: String,
    required: true
  },
  isApplicableMethodology: {
    type: Boolean,
    default: false,
    required: true
  }, nameOfApplicableMethodology: {
    type: String
  }, digitsOfYearsOfApplication: {
    type: Number
  }, digitsOfBeneficiariesOfTheMethodology: {
    type: Number
  }, digitsOfClassroomsForKids: {
    type: Number
  }, numberOfCustomClassroomsForKids: {
    type: Number
  }, methodologyReport: {
    type: String
  },
  isBoys: {
    type: Boolean,
    default: false,
    required: true
  },
  digitsOfTeachersOfboysForMethodology: {
    type: Number
  },
  digitsOfBoysStudentsInTheInstitute: {
    type: Number
  },
  isGirls: {
    type: Boolean,
    default: false,
    required: true
  },
  digitsOfTeachersOfgirlsForMethodology: {
    type: Number
  },
  digitsOfGirlsStudentsInTheInstitute: {
    type: Number
  },
  creationDateAR: {
    type: String,
    required: true
  },
  creationDateEN: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// author {type: Schema.Types.ObjectId, ref: 'User'};

module.exports = mongoose.model('NewInstitute', newInsSchema, 'newInstitute');
