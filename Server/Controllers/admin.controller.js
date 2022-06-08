const AdminModel = require("../Models/admin.model");

async function createAdmin(req, res) {
  try {
    let adminDetails = req.body;
    let response = await AdminModel.insertMany([adminDetails]);
    res.status(201).json({
      status: "sucessful ,Please  wait for verification",
      admin: response,
    });
  } catch (error) {
    res.status(401).json({
      status: "Server Error",
      error: error,
    });
  }
}
async function loginAdmin(req, res) {
  try {
    let adminDetails = req.body;
    let searchobj = {};
    searchobj["a_email"] = adminDetails.a_email;
    let response = await AdminModel.find(searchobj);
    response = response[0];

    if (response == undefined) {
      res.status(200).json({
        status: false,
        admin: "Apply for admin",
      });
    } else if (
      response.a_password == adminDetails.a_password &&
      response.a_permission
    ) {
      res.status(200).json({
        status: true,
        admin: response,
      });
    } else if (response.a_permission === false) {
      res.status(200).json({
        status: false,
        admin: "You are not verified ",
      });
    }
  } catch (error) {
    res.status(401).json({
      status: false,
      admin: "error",
    });
  }
}
module.exports = {
  createAdmin,
  loginAdmin,
};
