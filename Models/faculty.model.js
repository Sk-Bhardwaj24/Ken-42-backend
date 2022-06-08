const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FacultySchema = Schema({
  f_name: { type: String, required: true },
  f_subject: { type: String, required: true, unique: true },
  f_email: { type: String, required: true },
  f_password: { type: String, required: true },
});

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
