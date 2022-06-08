const FacultyModel = require("../Models/faculty.model");

async function createfaculty(req, res) {
  try {
    let facultyDetails = req.body;
    let response = await FacultyModel.insertMany([facultyDetails]);

    res.status(201).json({
      status: "Sucessful",
      faculty: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}
async function login(req, res) {
  try {
    let facultyDetails = req.body;
    let searchobj = {};
    searchobj["f_name"] = studenDetails.email;
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}
module.exports = {
  createfaculty,
};
