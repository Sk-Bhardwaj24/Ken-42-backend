const express = require("express");
const app = express();
const adminController = require("../Controllers/admin.controller");

app.post("/create", adminController.createAdmin); // API For user Registration
app.post("/login", adminController.loginAdmin);

module.exports = app;
