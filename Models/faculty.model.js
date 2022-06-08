const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FacultySchema = Schema({
  e_name: { type: String, required: true },
  e_info_url: { type: String, required: true, unique: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  e_registration_url: { type: String, required: true },
});

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
