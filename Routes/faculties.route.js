const express = require("express");
const app = express();
const facultyController = require("../Controllers/faculty.controller");

app.post("/create", facultyController.createfaculty); // API For user Registration
app.post("/login", studentController.login);
app.get("/allstudents", studentController.getstudent);

module.exports = app;
