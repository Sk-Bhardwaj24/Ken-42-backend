const { default: mongoose } = require("mongoose");
const StudentModel = require("../Models/studentList.model");
const AssignmentModel = require("../Models/assignment.model");

async function createAssignment(req, res) {
  try {
    let assignmentDetails = req.body;
    let response = await AssignmentModel.insertMany([assignmentDetails]);
    res.status(201).json({
      status: "Sucessful",
      assignment: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}
async function getAssignment(req, res) {
  try {
    let response = await AssignmentModel.find({});
    res.status(200).json({
      status: "Sucessful",
      assignments: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}

module.exports = {
  createAssignment,
  getAssignment,
};
