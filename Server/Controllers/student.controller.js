const StudentModel = require("../Models/studentList.model");

async function login(req, res) {
  try {
    let studenDetails = req.body;
    let searchobj = {};
    searchobj["email"] = studenDetails.email;
    let response = await StudentModel.find(searchobj);

    if (response.length == 0) {
      res.status(200).json({
        comment: "Please ask admin to register",
        status: false,
      });
    } else if (response[0].password == studenDetails.password) {
      res.status(200).json({
        comment: "Sucessful",
        status: true,
        student: response,
      });
    } else {
      res.status(200).json({
        comment: "Password is wrong",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,

      comment: "server Error",
    });
  }
}
async function registerstudent(req, res) {
  try {
    let studenDetails = req.body;
    // console.log(studenDetails);
    let response = await StudentModel.insertMany([studenDetails]);

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
