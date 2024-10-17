const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  isMale: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("Person", personSchema);
