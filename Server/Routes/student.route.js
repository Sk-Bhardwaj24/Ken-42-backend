const express = require("express");
const app = express();
const studentController = require("../Controllers/student.controller");

app.post("/create", studentController.registerstudent); // API For user Registration
app.post("/login", studentController.login);
app.get("/allstudents", studentController.getstudent);

module.exports = app;
