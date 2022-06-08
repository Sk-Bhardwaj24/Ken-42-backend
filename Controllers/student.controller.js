const StudentModel = require("../Models/studentList.model");

async function login(req, res) {
  let studenDetails = req.body;
  let searchobj = {};
  searchobj["email"] = studenDetails.email;
  let response = await StudentModel.find(searchobj);
  console.log(response);
}
async function registerstudent(req, res) {
  try {
    let studenDetails = req.body;
    // console.log(studenDetails);
    let response = await StudentModel.insertMany([studenDetails]);
    console.log(response);
    res.status(201).json({
      status: "Sucessful",
      student: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}

async function getstudent(req, res) {
  try {
    let response = await StudentModel.find({});
    console.log(response);
    res.status(200).json({
      status: "Sucessful",
      student: response,
    });
  } catch (error) {
    res.status(401).json({
      status: "Server Error",
      error: error,
    });
  }
}

module.exports = {
  login,
  registerstudent,
  getstudent,
};
