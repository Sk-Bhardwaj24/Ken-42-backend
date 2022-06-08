const express = require("express");
const app = express();
const eventController = require("../Controllers/event.controller");

app.post("/create", eventController.createEvents); // API For user Registration
app.get("/allevents", eventController.getEvents);

module.exports = app;
