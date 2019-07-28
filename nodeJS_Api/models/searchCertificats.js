var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for registrationuser
var searchCertificatsSchema = new Schema({
    No: {
    type: Number,
    required: true
  },
  CourseNumber: {
    type: String,
    required: true
  },
  CertificateNumber: {
    type: String,
    unique: true,
    required: true
  },
  trainersName: {
    type: String,
    required: true
  },
  Nationality: {
    type: String,
    required: true
  },
  IDNumber: {
    type: Number,
    required: true
  },
  attendanceMark: {
    type: Number,
    required: true
  },
  participationMark: {
    type: Number,
    required: true
  },
  AppliedHours: {
    type: Number,
    required: true
  },
  ExamMarkWrite: {
    type: Number,
    required: true
  },
  mark: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  creation_dt: {
    type: Date,
    required: true
  }
});



module.exports = mongoose.model('SearchCertificats',searchCertificatsSchema,'trainersCert');
module.exports = mongoose.model('GetTrainersInfo',searchCertificatsSchema,'trainersCert');