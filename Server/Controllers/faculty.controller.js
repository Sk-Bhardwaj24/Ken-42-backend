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
    searchobj["f_email"] = facultyDetails.f_email;
    let response = await FacultyModel.find(searchobj);
    if (response[0] == undefined) {
      res.status(200).json({
        status: "Please ask admin to register",
        error: error,
      });
    } else if (response[0].password == facultyDetails.password) {
      res.status(200).json({
        status: "Sucessful",
        faculty: response,
      });
    } else {
      res.status(200).json({
        status: "Password is wrong",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}
module.exports = {
  createfaculty,
  login,
};
