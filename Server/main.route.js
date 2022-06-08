const express = require("express");
const app = express();
const adminRoute = require("./Routes/admin.route.js");
const studentRoute = require("./Routes/student.route.js");
const facultyRoute = require("./Routes/faculties.route.js");
const eventRoute = require("./Routes/event.route");
var cors = require("cors");
// const blogRoute = require("./Routes/blog.route.js");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json([]));
app.use("/admin", adminRoute);
app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);
app.use("/event", eventRoute);

module.exports = app;
