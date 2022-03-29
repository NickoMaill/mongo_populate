const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxlength: 60,
    required: true,
  },
  surName: {
    type: String,
    maxlength: 100,
    required: true,
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
});

const addressSchema = new mongoose.Schema({
  streetName: {
    type: String,
    maxlength: 200,
    required: true,
  },
  streetNumber: {
    type: Number,
    min: 1,
    max: 10000,
    required: true,
  },
  postCode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentsSchema);
const Address = mongoose.model("Address", addressSchema);

module.exports = { Student, Address };
