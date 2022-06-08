// 0. Name
// 1. Roll number
// 2. Term
// 3. Current year
// 4. Contact number
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Email should be Unique
  roll: { type: String, required: true },
  term: { type: String, required: true },
  year: { type: String, required: true },
  number: { type: String, required: true },
  // fees: [{ type: Object, required: true }],
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
