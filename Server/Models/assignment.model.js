const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AssignmentSchema = Schema({
  ass_title: { type: String, required: true },
  ass_body: { type: String, required: true },
  ass_term: { type: String, required: true },
  ass_submission: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
});

const Assignment = mongoose.model("Event", AssignmentSchema);
module.exports = Assignment;
